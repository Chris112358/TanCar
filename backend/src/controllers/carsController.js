//import { Request, Response } from 'express'
import { pool } from '../db/postgres.js'

export async function getCars(req, res) {
  
  const result = await pool.query('SELECT * FROM cars ORDER BY id')

  res.json(result.rows)

}

export async function createCar(req, res) {

  const { name } = req.body  // example {"name": "My Car"}

  const result = await pool.query(
    'INSERT INTO cars(name) VALUES($1) RETURNING *',
    [name]
  )

  console.log("Created Car With name: " + name)
  res.json(result.rows[0])

}

export async function deleteCar(req, res) {
  const {carId} = req.body

  const result = await pool.query(
    "DELETE FROM cars where id=$1",
    [carId]
  )
  console.log("Deleted Car with Id: " + carId)

  res.json(result.command)

}