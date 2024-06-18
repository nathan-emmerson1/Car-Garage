import { useVehicles } from '../hooks/useVehicles'

export function Vehicles() {
  const { data, isPending, isError } = useVehicles()
  if (isPending) return <p>Loading....</p>
  if (isError) return <p>There was a error</p>
  // console.log(vehicles)

  return (
    <>
      <h1>There are the vehicles</h1>
      <ul>
        {data.map((vehicle) => (
          <li key={vehicle.id}>
            <div>
            <p>Id:{vehicle.id}</p>
              <p>Name:{vehicle.name}</p>
              <p>Make:{vehicle.make}</p>
              <p>Model:{vehicle.model}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
