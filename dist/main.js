const tempManager = new TempManager()
const renderer = new Renderer()

const loadPage = async function(){
    tempManager.getDataFromDB() 
    await renderer.renderData(tempManager.cityData)
}

loadPage()

const handleSearch = async function(){
    const cityInput = $("#city-input").val()
    await tempManager.getCityData(cityInput)
     renderer.renderData(tempManager.cityData)
}

$("#search").on("click", function(){
    handleSearch()
    $("#city-input").val("") 
})


$("#display-cityData").on("click", ".save", function(){
    const cityName = $(this).siblings(".name").text()
    tempManager.saveCity(cityName)
})

$("#display-cityData").on("click", ".delete", function(){
    const cityName = $(this).siblings(".name").text()
    tempManager.removeCity(cityName)
})

