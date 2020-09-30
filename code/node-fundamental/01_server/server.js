const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/Carrera', function(req, res){  
    console.log(req.headers) 
    res.send('Lista de carreras de la UPS')
})

router.post('/Carrera', function(req, res){  

    //console.log(req.body)
    //console.log(req.query) 
    //res.status(200).send({tipo_error:0, mensaje_error:'', mensaje_exito:'Añádido exitosamente'})
    if(req.query.error == 'ok'){
       res.status(500).send({tipo_error:1, mensaje_error:'Error en el servidor', mensaje_exito:''})
    }else{
        res.status(200).send({tipo_error:0, mensaje_error:'', mensaje_exito:'Todo esta bien'})
    }
    
})

app.use( '/', express.static('public'))
app.listen(5000)
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )
