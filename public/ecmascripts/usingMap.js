const users =  [{name: 'Jun'}, {name: 'John'}]

const sayHello = ({name}) => {
  var line = console.log
  line('hello! ' + name )
}

{users.map(user => sayHello(user))}