const express = require('express')

const mongoose = require('mongoose')
//CONFIG (DEPENDENCIES AT THE TOP, MIDDLEWARE, THEN ROUTES)
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')

//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
        () => {console.log('DB Connected')}
    )
//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an App About Breads')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//Bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)
//404 Page
app.get('*', (req,res) => {
    res.send('404')
})
//LISTEN
app.listen(PORT, () => {
    console.log('proofing at port', PORT)
})