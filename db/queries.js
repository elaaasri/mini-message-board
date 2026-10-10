import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages ORDER BY id ASC");
  return rows;
}

async function insertNewMessage(username, message) {
  await pool.query(
    "INSERT INTO messages (username, message, added, likes) VALUES ($1, $2, NOW(), 0)",
    [username, message],
  );
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function incrementMessageById(id) {
  await pool.query("UPDATE messages SET likes = likes + 1  WHERE id = $1", [
    id,
  ]);
}

export {
  getAllMessages,
  insertNewMessage,
  getMessageById,
  incrementMessageById,
};
