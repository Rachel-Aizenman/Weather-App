const bodyParser = require('body-parser')
const express = require("express")
const mongoose = require('mongoose')
const request = require('request')
const router = express.Router
const path = require('path')
const port = 3000
const app = express()
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))




app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

