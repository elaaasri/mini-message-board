import pool from "../db/pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}
export { getAllMessages };
