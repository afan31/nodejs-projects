// const square = function(x) {
//   return x*x
// }


// const square = (x) => {
//   return x*x
// }


// const square = (x) => x*x

// console.log(square(4))


// use of arrow functions as properties on an object

// cant use arrow functions here as arrow functions avoid their own git bindings
const event = {
  name: 'Birthday Party',
  guestList: ['Afan','Prateek'],
  printGuestList() {
    console.log('Guest list for ' + this.name)
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name)
    })
  }
}

event.printGuestList()