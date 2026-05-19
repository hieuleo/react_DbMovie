require('dotenv').config();

const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const { getDb } = require('./db');

async function seedUser() {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });

  const username = (process.env.SEED_USERNAME || 'admin').trim().toLowerCase();
  const password = process.env.SEED_PASSWORD || 'admin123';
  const db = await getDb();
  const existingUser = await db.get('SELECT id FROM users WHERE username = ?', username);

  if (existingUser) {
    console.log(`User "${username}" already exists.`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  await db.run(
    'INSERT INTO users (username, password_hash) VALUES (?, ?)',
    username,
    passwordHash
  );

  console.log(`Created user "${username}".`);
}

seedUser()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
