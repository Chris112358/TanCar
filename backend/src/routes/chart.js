import { Router } from "express";
import { getLitersChart, getPriceChart } from "../controllers/chartController.js"


const router = Router()

router.get("/price/:carId", getPriceChart)
router.get("/liters/:carId", getLitersChart )

export default router