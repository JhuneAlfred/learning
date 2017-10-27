
function doItSafe(n, message, func) {
    if (n != null && typeof n === 'number') {
        if (message != null && typeof message === 'string') {
            return func(n, message)
        }
    }
}

function createSafeVersion(func) {
    return function(n, message) {
        if (n != null && typeof message === 'string') {
            return func(n, message)
        }
    }
}

function printMessageNTimes(n, message) {
    for (var i = 0; i < n; i++) {
        console.log(message)
    }
}

function getNthLetter(n, string) {
    return string.charAt(n)
}

function getSubstringOfLength(n, string) {
    return string.substring(0, n)
}

const printMessageNTimesSafe = createSafeVersion(printMessageNTimes)
const getNthLetterSafe = createSafeVersion(getNthLetter)
const getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength)

getNthLetterSafe("two", "Javascript")

printMessageNTimesSafe(4, "Banana", printMessageNTimes)
getNthLetterSafe(2, "Javascript", getNthLetter)
getSubstringOfLengthSafe(5, "Hello and welcome", getSubstringOfLength)
