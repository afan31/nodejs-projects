const fs = require('fs')

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData)

// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer = fs.readFileSync('1-json.json')
// console.log(dataBuffer.toString())
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = 'Afan'
user.age = 31
const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON);

