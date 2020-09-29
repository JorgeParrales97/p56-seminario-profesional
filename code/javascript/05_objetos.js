var planificador1 = {
    nombre: 'Jorge',
    apellido: 'Parrales',
    afiliacion: 'Corporacion el rosado',
    correoelectronico: 'jparrales@elrosado.com',
}

var planificador2 = {
    nombre: 'Diana',
    apellido: 'Pianda',
    afiliacion: 'Corporacion el rosado',
    correoelectronico: 'Dpianda@elrosado.com',
}

function imprimirNombMayus(objeto){
    var {nombre} = objeto
    console.log(`${nombre.toUpperCase()} ${objeto.apellido()}`)
}

function imprimirNombMinus(objeto){
    console.log(`${nombre.toLowerCase()} ${objeto.apellido()}`)
}

function imprimirApellMayus({apellido}){
    console.log(`${apellido.toUpperCase()}`)
}

imprimirNombMayus(planificador1)
imprimirNombMinus(planificador1)
imprimirApellMayus(planificador2)