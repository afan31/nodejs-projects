const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: "Afan"
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: "Afan"
  })
})


app.get('/help', (req, res) => {
  res.render('help', {
    helpText: "This is some helpful text",
    title: 'Help Page',
    name: "Afan"
  })
})

app.get('/weather', (req, res) => {
  res.send({
    location: 'Boston',
    forecast: 'It is snowing'
  })
})

app.get('/help/*', (req,res) => {
  res.render('404', {
    title: '404',
    name: 'Afan',
    errorMessage: 'Help Article not found!'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: 404,
    name: 'Afan',
    errorMessage: 'Page not found!'
  })
})


// start the server
app.listen(4000, () => {
  console.log('Server is up on port 4000')
})