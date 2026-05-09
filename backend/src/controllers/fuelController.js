//import { Request, Response } from 'express'
import { pool } from '../db/postgres.js'

export async function getFuelForCar(req, res) {

  const carId = req.params.carId

  const result = await pool.query(
    'SELECT * FROM fuel_entries WHERE car_id=$1 ORDER BY created_at DESC',
    [carId]
  )

  res.json(result.rows)

}

export async function createFuel(req, res) {

  const carId = req.params.carId
  const { liters, price, mileage } = req.body

  const result = await pool.query(
    `INSERT INTO fuel_entries(car_id, liters, price, mileage)
     VALUES($1,$2,$3,$4)
     RETURNING *`,
    [carId, liters, price, mileage]
  )

  console.log("Created Fuel for Car: " + carId)

  res.json(result.rows[0])

}

export async function deleteFuel(req, res) {

  const {fuelId} = req.body

  const result = await pool.query(
    "DELETE FROM fuel_entries where id=$1",
    [fuelId]
  )

  console.log("Deleted Fuel with Id: " + fuelId)

  res.json(result.command)
}