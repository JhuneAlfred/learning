const a = 3
{
    let a = 7
    a = 8

}

console.log(a)

const colors = ['white', 'yellow', 'brown', 'purple']

function giveMeTheColors() {
    return function() {
        colors.map( (color) => {
            console.log(color)
        })
    }
}

giveMeTheColors()()
//or
//const colorFunc = giveMeTheColors()
//colorFunc()