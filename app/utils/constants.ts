import Constants from 'expo-constants'

const PUBLISHABLE_KEY = Constants?.manifest?.extra?.publishableKey
const API_URL = Constants?.manifest?.extra?.apiURL

export {
  PUBLISHABLE_KEY,
  API_URL
}