class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura    
    }

    saludar() {
        console.log( `Hola soy ${this.nombre} ${this.apellido}.` )
    }

    soyAlto() {
        if (this.altura > 1.70) {
            console.log( `Mi altura es ${this.altura} y soy alto.` )
        } else {
            console.log( `Mi altura es ${this.altura} y no soy alto.` )
        }
    }
}

class Deportista extends Persona {
    constructor(nombre, apellido) {
        super( nombre, apellido )
    }

    saludar() {
        console.log( `Hola soy ${this.nombre} ${this.apellido} y soy deportista.` )
    }
}

objeto1 = new Persona('Jorge', 'Parrales', 1.70)
objeto1.saludar()
objeto1.soyAlto()

objeto2 = new Deportista('Guisella', 'Estrada')
objeto2.saludar()
objeto2.altura = 1.50
objeto2.soyAlto()