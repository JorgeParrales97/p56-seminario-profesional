const storage = require('./storage')

function addCarrera(nombre, descripcion){
    return new Promise((resolve, reject) => {
        let Carrera = {
            nombre : nombre,
            descripcion : descripcion,
        }
        storage.add(Carrera)
        resolve(Carrera)
    })
}

function getCarreras(){
    return new Promise((resolve, reject) =>{
        resolve(storage.get())
    })
}

module.export = {
    addCarrera,
    getCarreras,
}