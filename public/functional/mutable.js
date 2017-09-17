const Immutable = require('seamless-immutable')

const numArray = [3,4,5,6,2,7,9,8]
let sortedArray1 = numArray.sort();

console.log("not immutable array: " + numArray)
console.log("sorted array: " + sortedArray1)

//============================================

const immutableArray = Immutable([3,4,5,6,2,7,9,8])
//let sortedArray2 = immutableArray.sort(); //You will get an error that sort is not a function

console.log("immutable array: " + immutableArray)
//console.log("sorted array: " + sortedArray2)


//============================================
const immutableArrayAsMutable = Immutable([4,3,2,5,9,7,6,1]).asMutable()
let sortedArray3 = immutableArrayAsMutable.sort(); //You will get an error that sort is not a function

console.log("immutable array: " + immutableArrayAsMutable)
console.log("sorted array: " + sortedArray3)

//============================================

//Using setIn to insert new fields to an object
const user = Immutable({
  username: 'taylor'
})

const newUser = user.setIn(['account', 'address', 'city'], 'Omaha')

console.log("new user: " + newUser)