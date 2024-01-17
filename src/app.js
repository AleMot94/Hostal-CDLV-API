import express from 'express'
import cors from 'cors'

// CONFIGURACION EXPRESS
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 9000

app.listen(port, () => console.log(`escuchando el puerto ${port}`))
