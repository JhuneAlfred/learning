const R = require ('ramda')

var nums = [1,2,3,4,5,6,7,8,9]

var copy = R.flatten(nums)

console.log("new copy: " + copy)

var reject = R.reject((x) => {
   return x % 3 === 0
}, nums)

console.log("rejecrt result: " + reject)

var user =
  {
    name: "john",
    id: 1,
    active: true,
    password: "secret",
    address: "123 main st"
  }

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

var currentUser =  {
  name: "robert",
  id: 2,
  active: false,
  password: "secret2",
  address: "234 new way"
}
//Other method to exlude password when copying the user object
var newUser = {}
// Object.keys(user).forEach((k) => {
//    if (k !== 'password' ) {
//      newUser[k] = user[k]
//    }
// })

//The Ramda way - will get the same result as above
newUser = R.omit(['password'], user)
//newUser = R.omit(['password', 'id'], user)

console.log("new user name: " + newUser.name )
console.log("new user id: " + newUser.id )
console.log("new user active: " + newUser.active )
console.log("new user password: " + newUser.password )

//Pull value from a field using pathOr,
//if field is null or doesn' exists, it will return the "Not Found" on the left
const addr = R.pathOr('Not found', ['address'], user)

console.log("address: " + addr)

//Using project
var projectResult = R.project(['name', 'id', 'address'], users)
console.log("result from project", projectResult)


let userResult = users.find((u) => {
   return u.id == 2
})

console.log("result from using find: " + userResult.name)