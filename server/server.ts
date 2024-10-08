import express from 'express'
import * as Path from 'node:path'

import fruitRoutes from './routes/fruits.ts'
import carRoutes from './routes/vehicle.ts'
import jobRoutes from './routes/jobs.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/vehicles', carRoutes)
// server.use('/api/v1/vehicles/:id', carRoutes)
server.use('/api/v1/jobs', jobRoutes)
// server.use('/api/v1/job/:id', jobRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
