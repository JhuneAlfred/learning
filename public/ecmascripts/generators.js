function* eachItem(arr){
  for (var i=0; i < arr.length; i++){
    yield arr[i]
  }
}

var numbers = eachItem([1, 2, 3, 4, 5, 6, 7, 8, 9])

var counting = setInterval(function() {
  var number = numbers.next()
  if (number.done) {
    clearInterval(counting)
    console.log('Yay, I know how to count now!')
  }
  else {
    console.log(number.value)
  }



}, 500)