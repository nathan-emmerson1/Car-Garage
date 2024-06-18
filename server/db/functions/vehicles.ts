import connection from '../connection'
import { Vehicle, VehicleData } from '../../../models/vehicle'

const db = connection

export async function getAllVehicles(): Promise<Vehicle[]> {
  const result = await db('vehicles').select()
  return result
}

export async function getVehicleById(id: number) {
  const result = await db('vehicles').where({ id }).first()
  return result as VehicleData
}

export async function addVehicle(newVehicle: VehicleData) {
  const result = await db('vehicles').insert({ newVehicle })
  return result
}

export async function deleteVehicle(id: number) {
  const result = await db('vehicles').where({ id }).delete()
  return result
}
