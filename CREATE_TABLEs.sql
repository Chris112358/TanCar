CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE fuel_entries (
  id SERIAL PRIMARY KEY,
  car_id INTEGER REFERENCES cars(id),
  liters NUMERIC,
  price NUMERIC,
  mileage INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
