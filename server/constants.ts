import * as dotenv from 'dotenv'
const PUBLISHABLE_KEY = <string>process.env.publishableKey
const SECRET_KEY = <string>process.env.secretKey
const API_URL = <string>process.env.apiURL

export {
  PUBLISHABLE_KEY,
  SECRET_KEY,
  API_URL
}