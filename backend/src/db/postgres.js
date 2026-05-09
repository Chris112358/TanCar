import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})


const res = await pool.query(
  `CREATE TABLE IF NOT EXISTS cars (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS fuel_entries (
  id SERIAL PRIMARY KEY,
  car_id INTEGER REFERENCES cars(id),
  liters NUMERIC,
  price NUMERIC,
  mileage INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);`
)

export pool