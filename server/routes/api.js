const express = require("express")
const router = express.Router()
// const request = require('request')
const requestPromise = require('request-promise')
const City = require('./../model/City')


router.get('/city/:cityName', async function (req, res){
    const city = req.params.cityName
    let data = await requestPromise(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=7bf665b828fdfc577cc7819ba13ac560`)
    res.send(data)
})

router.get('/cities', async function(req, res){
    const data = await City.find({})
    res.send(data)
})

router.post('/city', function(req, res){
    let body = req.body
    const newCity = new City(body)
    newCity.save()
    res.end()
})

router.delete('/city/:cityName', async function(req, res){
    const cityName = req.params.cityName
 await City.findOneAndDelete({
        name: cityName
    })
    res.send("deleted")
})


module.exports = router

