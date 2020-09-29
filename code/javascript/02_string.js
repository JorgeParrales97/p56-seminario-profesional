var nombre = 'Jorge'
var apellido = 'Parrales'
var nombre = 'jorge', apellido = 'parrales'
var nombreMayus = nombre.toUpperCase()
var apellidoMayus = apellido.toUpperCase()

//JavaScript puro 
console.log(nombreMayus + '' + apellidoMayus)
//Especificacion de javascript - EcmaScript +6
console.log(`${nombre} ${apellidoMayus}`)

var primeraLetraNombre = nombre.charAt(0)
var longitudNombre = nombre.length
var subcadenaNombre = nombre.substr(2,4)

console.log(primeraLetraNombre)
console.log(longitudNombre)
console.log(subcadenaNombre)