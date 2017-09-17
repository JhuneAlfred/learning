//A pure function will always return a value, this reduces mental load as you know what to expect when calling the function

var list = []
var occurrences =  {}
occurrences = list.push({date: new Date()}, occurrences)

console.log("occurrences: ", occurrences)