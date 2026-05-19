const path = require('path');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const databasePath = process.env.DB_PATH || path.join(__dirname, 'data', 'auth.sqlite');

let database;

async function getDb() {
  if (!database) {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    await database.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }

  return database;
}

module.exports = {
  getDb,
};
