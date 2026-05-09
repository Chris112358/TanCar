import { Router } from 'express'
import { getFuelForCar, createFuel, deleteFuel } from '../controllers/fuelController.js'

const router = Router()

router.get('/:carId', getFuelForCar)
router.post('/:carId', createFuel)
router.delete("/", deleteFuel)

export default router