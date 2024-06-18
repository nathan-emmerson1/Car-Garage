import request from 'superagent'
import { Jobs, JobData } from '../../models/jobs'

const rootUrl = '/api/v1/jobs'

export async function getAllJobs(): Promise<Jobs[]> {
  return request.get(rootUrl).then((res) => {
    return res.body
  })
}

export async function getJobById(id: number) {
  return request.get(`${rootUrl}/${id}`).then((res) => {
    return res.body
  })
}
