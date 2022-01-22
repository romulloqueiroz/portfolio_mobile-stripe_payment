import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StripeProvider as _StripeProvider } from '@stripe/stripe-react-native'
import type { Props as StripeProviderProps } from '@stripe/stripe-react-native/lib/typescript/src/components/StripeProvider'
const StripeProvider = _StripeProvider as React.FC<StripeProviderProps>
import Stripe from './components/StripeProvider'
import { PUBLISHABLE_KEY } from './utils/constants'

const App = () => (
  <StripeProvider publishableKey={PUBLISHABLE_KEY}>
    <Stripe />
    <StatusBar style='auto' />
  </StripeProvider>
)

export default App