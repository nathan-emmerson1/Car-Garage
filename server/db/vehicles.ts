import connection from './connection'
import { Vehicle } from '../../models/vehicle'

const db = connection

export async function getAllVehicles(): Promise<Vehicle[]> {
  const result = await db('vehicles').select()
  return result
}
