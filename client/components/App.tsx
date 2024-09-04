import Job from './jobs.tsx'
import { Vehicles } from './vehiclesdetail.tsx'

function App() {
  return (
    <>
      <div className="app">
        <div>
          <h1>Car garage</h1>
        </div>
        <Vehicles />
        <Job />
      </div>
    </>
  )
}

export default App
