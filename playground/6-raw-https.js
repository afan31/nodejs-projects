http = require('http')

url  = 'http://api.weatherstack.com/current?access_key=ebdd50f61be5451cffc8299c146f1dd9&query=40,-75&units=f'

const request = http.request(url, (response) => {
  let data = ''
  response.on('data', (chunk) => {
    data += chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })
})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()