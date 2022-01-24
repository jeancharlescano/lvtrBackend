import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",
  host: "192.168.1.105",
  database: "lvtr",
  password: "password",
  port: 5432,
});

pool.connect;
