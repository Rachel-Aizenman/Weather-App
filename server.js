const express = require("express")
const bodyParser = require('body-parser')
const request = require('request')
const router = express.Router()
const path = require('path')
const port = 3000
const app = express()
const api = require('./server/routes/api')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/citiesDB', { useNewUrlParser: true,  useUnifiedTopology: true })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.use(express.static(path.join(__dirname, 'node_modules')))
// app.use(express.static(path.join(__dirname, 'server')))
app.use(express.static(path.join(__dirname,"dist")))


app.use('/', api)




//======//
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

