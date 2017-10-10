const colors = { "color": ["white", "gray", "black"] }

function todoApp() {

    return {...colors, "shape": ['round'], "height": ['12 feet'], "width": ['5 feet'], "color": ['red']  }
}

console.log(todoApp().color)  // returns red
console.log(colors.color) // returns white,gray,black