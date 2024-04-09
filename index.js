import express from 'express'

const app = express()

app.lisstem(5001, () => console.log('Api is runnung on port 5001'))

app.get('/', (req, res) => res.json('My API is running'))