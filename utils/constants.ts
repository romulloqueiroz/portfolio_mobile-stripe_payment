import Constants from 'expo-constants'

const PUBLISHABLE_KEY = Constants?.manifest?.extra?.publishableKey
const SECRET_KEY = Constants?.manifest?.extra?.secretKey

export {
  PUBLISHABLE_KEY,
  SECRET_KEY
}