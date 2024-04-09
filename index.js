import express from 'express'

const app = express()

app.listen(5222, () => console.log('Api is running on port 5222'))

app.get('/', (req, res) => res.json('My API is running'))