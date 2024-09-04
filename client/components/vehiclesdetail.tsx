import { useVehicles } from '../hooks/useVehicles'

export function Vehicles() {
  const { data, isPending, isError } = useVehicles()
  if (isPending) return <p>Loading....</p>
  if (isError) return <p>There was a error</p>
  // console.log(vehicles)

  return (
    <>
      <h1>Vehicle List</h1>
      <ul>
        {data.map((vehicle) => (
          <li key={vehicle.id}>
            <div className="vehicle-container">
              <div className="vehicle-content">
                <p>Name:{vehicle.name}</p>
                <p>Make:{vehicle.make}</p>
                <p>Model:{vehicle.model}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
