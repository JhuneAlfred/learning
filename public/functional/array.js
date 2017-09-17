var users = [
    {
      user: "john",
     id: 1,
      active: true
    },
  {
    user: "robert",
    id: 2,
    active: false
  },
  {
    user: "peter",
    id: 3,
    active: true
  }
]

var user = users.find((u) => {
  return u.id === 2
})

//loop through each user and updates active to a new value
var umap = users.map((u) => {
  u.active = false
  return u;
})


//returns true if every item in the array are active
//returns false if an item in the array is not active
var allActive = users.every((a) => {
   return a.active
})

//returns all items which are active
var activeUsers = users.filter((a) => {
  return a.active
})




console.log('displaying user(s) with map...')
console.log(umap)
console.log('displaying all active using every...')
console.log(allActive)
console.log('displaying a user using find...')
console.log(user)
console.log('displaying active users with filter...')
console.log(activeUsers)

var some = users.some((s) => {
  return s.active
})

console.log("displaying output using 'some'...")
console.log(some)


var nums = [1,2,3,4,5,6,7,8,9]

//Iterates each number in the array
//being the accumulator as the initial/total value
//on each loop and adds the "n" which is the number from the array
var accum = nums.reduce((accumulator, n) => {
  console.log("accumulator: " + accumulator)
  console.log("n: " + n)
  return accumulator+ n
}, 10) //the value here is the initial value

console.log("displaying accumulator result...")
console.log(accum)

