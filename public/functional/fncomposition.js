const R = require ('ramda')

//Note: pipe and compose behaves very similar
//except that "pipe" operates from left to right/top to bottom
//while "compose" operates from right to left/bottom to top
const isEmptyString = R.pipe(
  R.defaultTo(''),
  R.trim,
  R.isEmpty
)

//passing an empty string here returns true
//passing a non empty string will return false
console.log("is empty string: "+ isEmptyString(''))


//Putting all together
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

const isActive = (item) => {return item.active}

const selectUsers = R.pick(['id', 'name', 'address'])

const getActiveUsers = R.pipe(
  R.filter(isActive),
  R.map(selectUsers)
)(users)

console.log("active users: " + getActiveUsers) //.map ((user) => {
  //return user.name
// }))