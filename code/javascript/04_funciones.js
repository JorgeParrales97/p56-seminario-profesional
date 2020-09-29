var NomApe = 'Jorge Parrales'
var edad = 23

//Funcion tipo declarativa
function imprimirEdad(nombre, edad){
    console.log(`${nombre} tiene la edad de ${edad}.`)
}

//Funcion tipo flecha
var imprimirEdad2 = (nombre,edad) => {
    console.log( `${nombre} tiene la edad de ${edad}.`)}

//Funcion tipo expresiva
var imprimirEdad3 = (nombre, edad) =>{
    console.log(`${nombre} tiene la edad de ${edad}. `)
}

imprimirEdad(NomApe, edad)
imprimirEdad('Guisella Estrada', 24)
imprimirEdad2(NomApe, edad)
imprimirEdad3('Paola Parrales', 34)