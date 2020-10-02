const storage = require('./storage')

function addEstudiante(nombre, carrera, quintil) {
    return new Promise((resolve, reject) => {
        let estudiante  = {
            nombre: nombre,
            carrera: carrera,
            quintil: quintil,

        }
        storage.add( estudiante )
        resolve( estudiante )
    })
}

function getEstudiante( filtroEstudiante ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroEstudiante ) )
    } )
}

function updateEstudiante(idEstudiante, nombre, carrera, quintil) {
    return new Promise( async (resolve, reject) => {
        let estudiante = {
            nombre: nombre,
            carrera: carrera,
            quintil: quintil,

        }
        const result = await storage.update(idEstudiante, estudiante  )
        resolve( result )
    })
}

function deleteEstudiante(idEstudiante) {
    return new Promise((resolve, reject) => {
        storage.delete( idEstudiante )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addEstudiante,
    getEstudiante,
    updateEstudiante,
    deleteEstudiante,
}