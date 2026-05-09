require("dotenv").config()
const express = require("express")
const cors = require("cors")
//const { Pool } = require("pg")

const app = express()
app.use(cors())
app.use(express.json())

//const pool = new Pool({
  //host: process.env.DB_HOST,
  //user: process.env.DB_USER,
  //password: process.env.DB_PASSWORD,
  //database: process.env.DB_NAME,
  //port: process.env.DB_PORT,
//})

app.get("/", (req, res) => {
  res.send("TanCar API running")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})