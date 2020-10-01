const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    },
    materia: {
        type: String,
        required: true,
    },
    horario: String,
})

const model = mongoose.model( 'Docente', mySchema )
module.exports = model