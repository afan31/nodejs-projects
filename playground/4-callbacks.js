setTimeout(() => {
  console.log('2 seconds are up!')
}, 2000)

const names = ['Andrew', 'Afan', 'Jess']

const shortNames = names.filter((name) => {
  return name.length <= 4
})

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0
    }
    callback(data)
  }, 2000)
}

const address = '5502 Stearns Hill Rd, Waltham 02451, MA'

geocode(address, (data) => {
  console.log(data);
});


const add = (a,b, callback) => {
  setTimeout(() => {
    data = 1+4;
    callback(data)
  }, 2000)
}
const a = 1
const b = 4
add(a, b, (sum) => {
  console.log(sum);
})