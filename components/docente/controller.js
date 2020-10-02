const storage = require('./storage')

function addDocente(nombre, materia, correo) {
    return new Promise((resolve, reject) => {
        let docente = {
            nombre: nombre,
            materia: materia,
            correo: correo,
            
        }
        storage.add( docente )
        resolve( docente )
    })
}

function getDocentes( filtroDocente ) {
    return new Promise( (resolve, reject) => {
        resolve( storage.get( filtroDocente ) )
    } )
}

function updateDocente(idDocente, nombre, materia, correo) {
    return new Promise( async (resolve, reject) => {
        let docente = {
            nombre: nombre,
            materia: materia,
            correo: correo,
        }
        const result = await storage.update(idDocente, docente)
        resolve( result )
    })
}

function deleteDocente(idDocente) {
    return new Promise((resolve, reject) => {
        storage.delete( idDocente )
            .then(() => { resolve() })
            .catch((error) => { reject( error ) })
    })
}

module.exports = {
    addDocente,
    getDocentes,
    updateDocente,
    deleteDocente,
}