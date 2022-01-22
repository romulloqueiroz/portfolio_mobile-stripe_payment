import Constants from 'expo-constants'

const PUBLISHABLE_KEY = Constants?.manifest?.extra?.publishableKey
const SECRET_KEY = Constants?.manifest?.extra?.secretKey
const API_URL = Constants?.manifest?.extra?.apiURL

export {
  PUBLISHABLE_KEY,
  SECRET_KEY,
  API_URL
}