const express = require("express")
const router = express.Router()
// const request = require('request')
const requestPromise = require('request-promise')
const City = require('./../model/City')


router.get('/city/:cityName', async function (req, res){
    const city = req.params.cityName
    let data = await requestPromise(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=7bf665b828fdfc577cc7819ba13ac560`)
    let dataParsed = JSON.parse(data)
    let filteredData = {
            name: dataParsed.name,
            temperature: dataParsed.main.temp,
            condition: dataParsed.weather[0].description,
            conditionPic: dataParsed.weather[0].icon    
    }
    res.send(filteredData)
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

router.get('/check', async function (req, res){
    const check = res.status
    res.send(check)
})


router.get(`/errorCodes`, function (req, res) {
    request(`https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&APPID=1b93baf3898e69c5c5c2f91dac2e8709`, function (err, response) {
        let errorCode = response.statusCode
        console.log(response.statusCode)
        res.end(errorCode.toString())
    })
})






module.exports = router

