const express = require('express')
const baker = express.Router()
const Baker = require('../models/bakers')
const bakerSeedData = require('../models/baker_seed')


baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

baker.get('/', (req, res) => {
    Baker.find()
        .populate('breads')
        .then(foundBakers => {
            res.send(foundBakers)
        })
        // .catch(err =>{
        //     res.send('404')
        // })
})

//SHOW
baker.get('/:id', (req, res) => {
    Baker.findById(req.params.id)
        .populate('breads')
        .then(foundBaker => {
            res.render('bakerShow', {
                baker: foundBaker
            })
        })
})

module.exports = baker