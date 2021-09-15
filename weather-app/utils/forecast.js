const request = require('request')

const forecast = (lat, long, callback) => {
  const weatherURL = 'http://api.weatherstack.com/current?access_key=ebdd50f61be5451cffc8299c146f1dd9&query='+ encodeURIComponent(lat)+','+ encodeURIComponent(long)+'&units=f'
  request({ url: weatherURL, json: true}, (error, response) => {
        if (error){
          callback('Unable to connect to weather services!')
        } else if (response.body.error){
          callback('Unable to find location. Try another search!')
        } else {
            const currWeatherData = response.body.current
            const temp = currWeatherData.temperature
            const feelsLike = currWeatherData.feelslike
            const ans = currWeatherData.weather_descriptions[0] +'. It is currently '+temp+' degrees out. It feels like ' + feelsLike + ' degrees out.'
            callback(undefined, {
              data: ans
            })
        }
  })
}
      
    

module.exports = forecast;