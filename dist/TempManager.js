
class TempManager {
    constructor() {
        this.cityData = []
    }

    async getDataFromDB() {
        let cities = await $.get('/cities')
        this.cityData = cities
    }

    async getCityData(cityName) {
        // try {
           const data = 
           await $.get(`/city/${cityName}`)
            // if (data.err) {
                // throw new Error("broooo")
            // } else {
                this.cityData.push(data)

            } 
        // }
        // catch (err) { return err }
    // }

    async saveCity(cityName) {
        const city = this.cityData.find(c => c.name === cityName)
        await $.post('/city', city)
    }

    removeCity(cityName) {
        const cityIndex = this.cityData.findIndex(c => c.name === cityName)
        $.ajax({
            method: 'DELETE',
            url: 'http://localhost:8080/city/' + cityName,
            type: JSON,
            success: function (data) {
                // console.log(data)
            },
            error: function (xhr, text, error) {
                // console.log(error)
            }
        })
        this.cityData.splice(cityIndex, 1)

    }



}


