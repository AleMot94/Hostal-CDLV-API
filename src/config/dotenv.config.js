import dotenv from 'dotenv'

export const entorno = {
  MODE: process.argv[2]
}

if (process.argv[2] !== 'DEV' && process.argv[2] !== 'PROD') {
  console.log('argumentos incorrectos PROD o DEV')
  process.exit()
}
dotenv.config({
  path: process.argv[2] === 'DEV' ? './.env.dev' : './.env.prod'
})

entorno.NODE_ENV = process.env.NODE_ENV
entorno.PORT = process.env.PORT
entorno.MONGO_USUARIO = process.env.MONGO_USUARIO
entorno.MONGO_PASS = process.env.MONGO_PASS
entorno.MONGO_DB = process.env.MONGO_DB
