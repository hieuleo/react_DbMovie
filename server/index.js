require('dotenv').config();

const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('./db');

const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret-in-env';
const isProduction = process.env.NODE_ENV === 'production';

fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

if (isProduction && jwtSecret === 'change-this-secret-in-env') {
  throw new Error('JWT_SECRET must be configured in production.');
}

const allowedOrigins = [
  process.env.CLIENT_ORIGIN,
  'http://localhost:3000',
  'http://127.0.0.1:3000',
].filter(Boolean);

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    const isLocalDevOrigin = !isProduction && origin?.endsWith(':3000');

    if (!origin || allowedOrigins.includes(origin) || isLocalDevOrigin) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json());

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

const normalizeUsername = (username) => username.trim().toLowerCase();

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;

  if (!token) {
    return res.status(401).json({ message: 'Missing authentication token.' });
  }

  try {
    const payload = jwt.verify(token, jwtSecret);
    const db = await getDb();
    const user = await db.get('SELECT id, username FROM users WHERE id = ?', payload.sub);

    if (!user) {
      return res.status(401).json({ message: 'Invalid authentication token.' });
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired authentication token.' });
  }
};

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/auth/register', authLimiter, async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const normalizedUsername = normalizeUsername(username);

    if (!/^[a-z0-9_]{3,30}$/.test(normalizedUsername)) {
      return res.status(400).json({
        message: 'Username must be 3-30 characters and contain only letters, numbers, or underscores.',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }

    const db = await getDb();
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', normalizedUsername);

    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await db.run(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      normalizedUsername,
      passwordHash
    );

    return res.status(201).json({
      user: {
        id: result.lastID,
        username: normalizedUsername,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/api/auth/login', authLimiter, async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const normalizedUsername = normalizeUsername(username);
    const db = await getDb();
    const user = await db.get(
      'SELECT id, username, password_hash FROM users WHERE username = ?',
      normalizedUsername
    );

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const passwordMatches = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatches) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username,
      },
      jwtSecret,
      { expiresIn: '1d' }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  return res.json({
    user: req.user,
  });
});

app.listen(port, () => {
  console.log(`Auth API server is running on http://localhost:${port}`);
});
