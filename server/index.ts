import express from 'express'
import Stripe from 'stripe'
import { SECRET_KEY, PORT } from './constants'
const stripe = new Stripe(SECRET_KEY, { apiVersion: '2020-08-27' })

const app = express()

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // 10.00 USD
      currency: 'usd',
      payment_method_types: ['card'], // default,
    })
    const clientSecret = paymentIntent.client_secret
    res.send({ clientSecret })
  } catch (error: unknown) {
    console.error(error)
    if (error instanceof Error) res.status(500).send({ error: error.message })
  }
})