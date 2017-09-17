var users = [
  {
    name: "john",
    id: 1,
    active: true,
    password: "secret",
    address: "123 main st"
  },
  {
    name: "robert",
    id: 2,
    active: false,
    password: "secret2",
    address: "234 new way"
  },
  {
    name: "peter",
    id: 3,
    active: true,
    password: "secret3",
    address: "345 first ave"
  }
]

//Using function within a function
const byId = (id) => {
  console.log(id)
  return (item) => {
    console.log(item.name)
     return item.id === id
  }
}

console.log("result: " + users.find(byId(2)).id)

//Using Ramda's curry function
const R = require ('ramda')

const byIdCry = R.curry((id, item) => {
  return item.id === id
})

console.log("result using currying: " + users.find(byIdCry(2)).id)

const addNumbers= R.curry((a,b,c) => {
  return a+b+c
})

console.log("using curry to add numbers: " + addNumbers(1)(2)(3))