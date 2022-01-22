import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 3000
const PUBLISHABLE_KEY = <string>process.env.PUBLISHABLE_KEY
const SECRET_KEY = <string>process.env.SECRET_KEY
const API_URL = <string>process.env.API_URL

export {
  PUBLISHABLE_KEY,
  SECRET_KEY,
  API_URL,
  PORT
}