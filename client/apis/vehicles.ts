import request from 'superagent'
import { Vehicle, VehicleData } from '../../models/vehicle'

const rootUrl = '/api/v1'

export function getVehicles(): Promise<Vehicle[]> {
  return request.get(rootUrl + '/vehicles').then((res) => {
    return res.body
  })
}

export function getVehicleById(id: number) {
  return request.get(rootUrl + `/vehicles/${id}`).then((res) => {
    return res.body as VehicleData
  })
}
