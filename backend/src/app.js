import express from 'express'
import cors from 'cors'

import carRoutes from './routes/cars.js'
import fuelRoutes from './routes/fuel.js'
import chartRoutes from './routes/chart.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/cars', carRoutes)
app.use('/api/fuel', fuelRoutes)
app.use('/api/charts', chartRoutes)

//app.get('/', (_, res) => {
//  res.send('FuelTrack backend running fine. Everything works now')
//})

export default app