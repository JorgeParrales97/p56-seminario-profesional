const model = require('./model')

function addDocente( objeto ) {
    const docente = new model( objeto )
    docente.save()
}

async function getDocente( filtroDocente ) {
    let filtro = {}
    if (filtroDocente != null) {
        filtro = { nombre : filtroDocente }
    }
    const DocenteList = await model.find( filtro )
    return DocenteList
}

async function updateDocente( idDocente, objeto ) {
    const foundDocente = await model.findOne({ _id: idDocente })

    foundDocente.nombre = objeto.nombre
    foundDocente.materia = objeto.materia
    foundDocente.horario = objeto.horario

    const result = await foundDocente.save()
    return result
}

function deleteDocente(idDocente) {
    return model.deleteOne({ _id: idDocente })
}

module.exports = {
    add: addDocente,
    get: getDocente,
    update: updateDocente,
    delete: deleteDocente,
}