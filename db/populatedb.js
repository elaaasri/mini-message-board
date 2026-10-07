#! /usr/bin/env node

import { Client } from "pg";

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR ( 255 ),
        text TEXT,
        added TIMESTAMP,
        likes INTEGER
    );

    INSERT INTO messages (username, text, added, likes) 
    VALUES ('elaaasri', 'Hi There!', NOW(), 0);
`;

async function main() {
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
}

main();
