var Estudiante1 = {
    nombre: 'Jorge',
    apellido: 'Parrales',
}

var Estudiante2 = {
    nombre: 'Yomar',
    apellido: 'Toala',
}

// Asignación por paso de valor
var otroEstudiante = {
    ... Estudiante1
}

console.log( Estudiante1 == Estudiante2 )
// Debido a que son objetos diferentes (tienen diferente dirección de memoria)
console.log( Estudiante1 == otroEstudiante )

console.log( otroEstudiante.nombre )

// Esta asignación es por referencia
Estudiante3 = otroEstudiante
otroEstudiante.nombre = 'Wilmer'

// Debido a que es el mismo objeto (tienen la misma dirección en memoria)
console.log( Estudiante3 == otroEstudiante )
console.log( Estudiante3 )
console.log( Estudiante1 )