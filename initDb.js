// initDb.js
const db = require("./db");

// Initialize the database and create the table
db.serialize(() => {
  console.log("Initializing database...");
});
