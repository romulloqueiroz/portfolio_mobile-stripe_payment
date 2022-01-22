import express from 'express'
// import { PUBLISHABLE_KEY, SECRET_KEY } from '../utils/constants'

const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
