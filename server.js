const express = require('express')

//CONFIG
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

//ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an App About Breads')
})

//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//404 Page
app.get('*', (req,res) => {
    res.send('404')
})
//LISTEN
app.listen(PORT, () => {
    console.log('proofing at port', PORT)
})