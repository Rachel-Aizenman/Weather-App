class TempManager{
    constructor(){
        this.cityData = []
    }
    
    getDataFromDB = async function(){
        let cities = await $.get('/cities')
        this.cityData = cities
        console.log(cityData)
   }

   getCityData = async function(){
       const data = req.body
      await $.get('/city:cityName')
      cityData.push({cityName: data.name, Temperature: data.temperature, Conditions: data.condition, ConditionIcon: data.conditionIcon, })
   }

   saveCity = async function(cityName){
       cityData.find(c => c.name === cityName)
       await $.post('/city', city)
   }

   removeCity = async function(){

   }


} 

saveCity = async function(cityName){
    cityData.find(c => c.name === cityName)
    await $.post('/city', city)
}
 saveCity()

