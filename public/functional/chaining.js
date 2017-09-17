var nums = [1,2,3,4,5,6,7,8,9]

let reduced = nums.map((n) => {
  return n - 1
})

console.log("reduced: " + reduced)

//using this example, result will be
//numbers divisible by 3 from 0,1,2,3,4,5,6,7,8
let divisible = reduced.filter((n) => {
   return n % 3 === 0
})

console.log("divisible: " + divisible)

//Using result 0,3,6
let sum = divisible.reduce ((acc, n) => {
   return acc + n
}, 0)

console.log ("sum: " + sum)

//Using chaining, we can consolidate all codes above with shorter code like the one below
let chainingresult = nums.map((n) => {return n - 1})
                    .filter((n) => {return n % 3 === 0})
                    .reduce((acc, n) => {return acc + n}, 0)

console.log("chaining result: " + chainingresult)