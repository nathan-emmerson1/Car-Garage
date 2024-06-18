/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import { Vehicles } from './components/vehiclesdetail'
import { VehicleById } from './components/vehicle'
import Job from './components/jobs'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<App />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/vehicle/:id" element={<VehicleById />} />
      <Route path="/jobs" element={<Job />} />
    </>,
  ]),
)

export default router
