const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/Carrera', function(req, res){  
    //console.log(req.headers) 
    response.success(req, res, 'Lista de carreras de la UPS', 200 )
    //res.send()
})

router.post('/Carrera', function(req, res){  

    //console.log(req.body)
    //console.log(req.query) 
    //res.status(200).send({tipo_error:0, mensaje_error:'', mensaje_exito:'Añádido exitosamente'})
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error al ingresar una carrera', 500 )
    }else{
        //res.status(200).send({tipo_error:0, mensaje_error:'', mensaje_exito:'Todo esta bien'})
        response.success(req, res, 'Ingreso exitoso', 201 )
    }
    
})

app.use( '/', express.static('public'))
app.listen(5000)
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )