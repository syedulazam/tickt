// pages/api/addEvent.js
import db from "../../db";

export default (req, res) => {
  if (req.method === "POST") {
    const { name, where, when, donations, status } = req.body;

    const query = `
      INSERT INTO events (name, "where", "when", donations, status)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.run(query, [name, where, when, donations, status], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({ id: this.lastID });
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
