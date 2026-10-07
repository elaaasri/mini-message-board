import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function insertNewMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, added, likes) VALUES ($1, $2, NOW(), 0)",
    [username, message],
  );
}

export { getAllMessages, insertNewMessage };
