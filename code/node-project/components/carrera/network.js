const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router()

router.get('/', function(req, res){  
    controller.getCarreras()
    .then((data) => {
        response.success(req, res, data, 200 )
    })
    .catch((error) => {
        response.error(req, res, error, 500 )
    })
})


router.post('/', function(req, res){  
    controller.addCarrera(req.body.nombre, req.body.descripcion)
    .then((data) => {
        response.success(req, res, data, 201 )
    })
    .catch((error) => {
        response.error(req, res, error, 500 )
    })

    //if(req.query.error == 'ok'){
    //    response.error(req, res, 'Error al ingresar una carrera', 500 )
    //}else{
    //    response.success(req, res, 'Ingreso exitoso', 201 )
    //}
    
})

module.exports = router