var obj = {
  name: "John",
  last: "Doe",
  title: "Mr",
  height: "6.10",
  weight: "220 lbs"
}


function getInfo({title, last, weight}) {
   return `${title} ${last}'s weight is ${weight}`
}

console.log(getInfo(obj))