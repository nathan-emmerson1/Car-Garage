import connection from './connection'
import { Jobs, JobData } from '../../models/jobs'

const db = connection

export async function getAllJobs() {
  const result = await db('jobs').select()
  return result as Jobs[]
}

export async function getJobById(id: number) {
  const result = await db('jobs').where({ id }).first()
  return result as JobData
}


export async function addJob(newJob: JobData) {
  return await db('jobs').insert({newJob})
  
}