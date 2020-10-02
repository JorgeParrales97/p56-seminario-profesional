const mongoose = require('mongoose')
const schema = mongoose.Schema

const mySchema = new schema({
    nombre: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    },
    nivel: {
        type: String,
        required: true,
        
    }
})

const model = mongoose.model( 'Estudiante', mySchema )
module.exports = model