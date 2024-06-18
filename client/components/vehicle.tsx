import { useParams } from 'react-router-dom'
import { useVehicleById } from '../hooks/useVehicleById'

export function VehicleById() {
  const { id } = useParams()
  console.log()
  const { data, isPending, isError } = useVehicleById(Number(id))

  if (isPending) return <p>Loading...</p>

  if (isError) return <p>There was a error</p>

  if (!data) return <p>There was no data</p>

  return (
    <>
      <p>{data.name}</p>
      <p>{data.make}</p>
      <p>{data.model}</p>
    </>
  )
}
