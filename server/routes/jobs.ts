import { Router } from "express";
import * as db from '../db/jobs'

const router = Router()

router.get('/', async (req,res) => {
  try {
    const jobs = await db.getAllJobs()
    console.log(jobs)
    res.json(jobs)
  } catch (error) {
    console.log(error)
     res.status(500).json({messege: 'sorry couldnt jobs'})
      }
})

router.get('/:id', async (req,res) => {
  try {
    const result = await db.getJobById(Number(req.params.id))
    console.log(result)
    res.json(result)
  } catch (error) {
    console.log(error)
    res.status(500).json({messege: 'couldnt get jobs by id'})
  }
})

router.post('/', async (req,res) => {
  const newJob = req.body
  try {
     await db.addJob(newJob)
    res.sendStatus(200)
  } catch (error) {
    console.error({messge: 'error adding job'})
  }
})
export default router