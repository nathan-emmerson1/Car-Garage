import { useFruits } from '../hooks/useFruits.ts'
import { Vehicles } from './vehiclesdetail.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
        <Vehicles />
      </div>
    </>
  )
}

export default App
