const sqlite3 = require("sqlite3").verbose();

// Connect to database
const db = new sqlite3.Database("database.db");

// Create table
db.serialize(() => {
  db.run(
    `
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      "where" TEXT,
      "when" TEXT,
      donations INTEGER,
      status TEXT
    )
  `,
    (err) => {
      if (err) {
        console.error("Error creating table: ", err.message);
      } else {
        console.log("Table created successfully.");
      }
    }
  );
});

module.exports = db;
