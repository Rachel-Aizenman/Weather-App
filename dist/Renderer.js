class renderer{
     renderData (allCityData) {
        const source = $("#cityData-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({ allCityData } )
        $("#datadisplay-cityData").append(someHTML)
     }
}