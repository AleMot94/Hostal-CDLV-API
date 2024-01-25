import express from 'express'
import cors from 'cors'
import { connectMongo } from './utils/mongoose.js'
import { homeRouter } from './routes/home.router.js'
import { bedroomsRouter } from './routes/bedrooms.api.router.js'

// CONFIGURACION EXPRESS
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
const port = process.env.PORT || 9000 // PORT es la variable de entorno que usa heroku

// CONECCION A MONGO
connectMongo()

// ENDPOINTS VISTAS
app.use('/', homeRouter)

// ENDPOINTS API
app.use('/home', homeRouter)
app.use('/api/bedrooms', bedroomsRouter)

app.listen(port, () => console.log(`escuchando el puerto ${port}`))
