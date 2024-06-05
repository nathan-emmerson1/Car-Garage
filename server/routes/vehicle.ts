import { Router } from 'express'
 import * as db from '../db/vehicles'

 const router = Router()

 router.get('/', async (req, res) => {
  try {
    const vehicles = await db.getAllVehicles()
    console.log(vehicles)
    res.json(vehicles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'couldnt get any vehicles'})
  }
 })
 
 export default router