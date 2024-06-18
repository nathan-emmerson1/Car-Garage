import { Router } from 'express'
import * as db from '../db/functions/vehicles'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const vehicles = await db.getAllVehicles()
    console.log('router get all')
    console.log(vehicles)
    res.json(vehicles)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'couldnt get any vehicles' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await db.getVehicleById(Number(req.params.id))
    console.log('router get by id')
    console.log(result)
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({ messege: 'coudlnt get vehicle by id' })
  }
})

router.post('/', async (req,res) => {
  const newVehicle = req.body
  try{
    await db.addVehicle(newVehicle)
    res.sendStatus(200)
  } catch (error) {
    console.error('adding vehicle error')
    res.sendStatus(500)

  }
})

export default router
