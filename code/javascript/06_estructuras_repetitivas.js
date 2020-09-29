let persona = {
    nombre: 'Jorge',
    apellido: 'Parrales',
    peso: 170, 
}

const INCREMENTAR_PESO = 3
const DECREMENTAR_PESO = 2

const aumenPeso = ( objeto ) => objeto.peso += INCREMENTAR_PESO
const dismiPeso = ( objeto ) => objeto.peso -= DECREMENTAR_PESO

const comeMucho = () => Math.random() < 0.4
const realizaDeporte = () => Math.random() < 0.8

const META = persona.peso - 10

console.log( `Al inicio del año ${persona.nombre} pesa ${persona.peso}.` )

while( persona.peso > META ) {
    if (comeMucho()) {
        console.log('Aumenta el peso.')
        aumentarPeso( persona )
    }
    if (realizaDeporte()) {
        console.log('Disminuye el peso.')
        disminuyePeso( persona )
    }
}

console.log( `Al final del año ${persona.nombre} pesa ${persona.peso}.` )