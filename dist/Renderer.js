
class Renderer{
     
     renderData (allCityData) {
      $("#display-cityData").empty()
        const source = $("#cityData-template").html()
        const template = Handlebars.compile(source)
        const someHTML = template({ allCityData } )
        $("#display-cityData").append(someHTML)
     }

}