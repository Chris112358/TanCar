import { pool } from './postgres.js'

export async function initDb() {
  try {
    await pool.query( `
        CREATE TABLE IF NOT EXISTS cars (
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
        );
    `)

    console.log('Database initialized')
  } catch (err) {
    console.error('DB init error:', err)
  }
}
