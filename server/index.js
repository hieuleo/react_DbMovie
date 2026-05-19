require('dotenv').config();

const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('./db');

const app = express();
const port = process.env.PORT || 5000;
const jwtSecret = process.env.JWT_SECRET || 'change-this-secret-in-env';

fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

app.use(cors({
  origin(origin, callback) {
    const allowedOrigins = [
      process.env.CLIENT_ORIGIN,
      'http://localhost:3000',
      'http://127.0.0.1:3000',
    ].filter(Boolean);

    if (!origin || allowedOrigins.includes(origin) || origin.endsWith(':3000')) {
      callback(null, true);
      return;
    }

    callback(new Error('Not allowed by CORS'));
  },
}));
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters.' });
    }

    const db = await getDb();
    const existingUser = await db.get('SELECT id FROM users WHERE username = ?', username);

    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    const passwordHash = await bcrypt.hash(password, 12);
    const result = await db.run(
      'INSERT INTO users (username, password_hash) VALUES (?, ?)',
      username,
      passwordHash
    );

    return res.status(201).json({
      user: {
        id: result.lastID,
        username,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required.' });
    }

    const db = await getDb();
    const user = await db.get(
      'SELECT id, username, password_hash FROM users WHERE username = ?',
      username
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

app.listen(port, () => {
  console.log(`Auth API server is running on http://localhost:${port}`);
});
