import { Router } from 'express'
import { getCars, createCar, deleteCar } from '../controllers/carsController.js'

const router = Router()

router.get('/', getCars)
router.post('/', createCar)
router.delete("/", deleteCar)

export default router