function getValueOfX() {
    var x = 10
    return function() {
        console.log('x is ' + x)
    }
}

var valueOfX = getValueOfX()
valueOfX()


function createCounter() {
    var count = 0
    return {
        increment: function() {
            count +=1
        },
        currentValue: function() {
            return count
        }
    }
}


var myCounter = createCounter()
myCounter.increment()
myCounter.increment()
myCounter.increment()
console.log(myCounter.currentValue())