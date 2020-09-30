const list = []

function addCarrera(objeto){
    list.push(objeto)
}

function getCarreras(){
    return list 
}

module.exports= {
    add: addCarrera,
    get: getCarreras,
}