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

    async removeCity(cityName) {
        $.ajax({
            method: 'DELETE',
            url: 'https://localhost:3000/city/' + cityName,
            type: JSON,
            success: function (url) {
                console.log("success")
            },
            error: function (xhr, text, error) {
                console.log(error)
            }
        })
        await $.delete('/city', city)
    }



}


