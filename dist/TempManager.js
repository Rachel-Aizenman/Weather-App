class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let cities = await $.get('/cities')
        this.cityData = cities
    }

    async getCityData(cityName) {
      const data = await $.get(`/city/${cityName}`)
      this.cityData.push(data)
    }

    async saveCity(cityName) {
        const city = this.cityData.find(c => c.name === cityName)
        await $.post('/city', city)
    }

     removeCity(cityName) {
        const cityIndex = this.cityData.findIndex(c => c.name === cityName)
        this.cityData.splice(cityIndex, 1)
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:3000/city/' + cityName,
            type: JSON,
            success: function (data) {
                 console.log(data)
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
    }



}


