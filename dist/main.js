const loadPage = async function(){
    geDataFromDB()
  savedData = db.citiesDB.find({})
  renderer(savedData)
}
