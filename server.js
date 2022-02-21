const express = require('express')

//CONFIG
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an App About Breads')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
//LISTEN
app.listen(PORT, () => {
    console.log('proofing at port', PORT)
})