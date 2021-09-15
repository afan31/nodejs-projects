const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = 'San Francisco, USA'
geocode(address,(error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

const lat =  42.3765;
const long = 71.2356
forecast(lat, long, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})