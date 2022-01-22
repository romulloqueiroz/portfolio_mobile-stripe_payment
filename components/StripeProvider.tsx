import { useState } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'
import { CardField, CardFieldInput, useConfirmPayment } from '@stripe/stripe-react-native'
const API_URL = 'http://localhost:3000'

const Stripe = () => {
  const [email, setEmail] = useState('')
  const [cardDetails, setCardDetails] = useState<CardFieldInput.Details>()
  const { confirmPayment, loading } = useConfirmPayment()

  const fetchPayment = async () => {
    const response = await fetch(`${API_URL}/create-payment-intent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
  }

  const handlePayPress = async () => {
    if (!cardDetails?.complete || !email) {
      alert('Please fill out all fields')
      return
    }
    const billingDetails = { email }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        autoCapitalize='none'
        placeholder='Email'
        keyboardType='email-address'
        onChangeText={setEmail}
        value={email}
        style={styles.input}
      />
      <CardField
        postalCodeEnabled={true}
        placeholder={{ number: 'XXXX XXXX XXXX XXXX' }}
        cardStyle={styles.card}
        style={styles.cardContainer}
        onCardChange={cardDetails => setCardDetails(cardDetails)}
      />
      <Button
        title='Pay'
        onPress={handlePayPress}
        disabled={!cardDetails || loading}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 20
  },
  input: {
    backgroundColor: '#efefefef',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    height: 40,
  },
  card: {
    backgroundColor: '#efefefef',
  },
  cardContainer: {
    height: 40,
    marginVertical: 30,
  }
})

export default Stripe