const { Router } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/Carrera', function(req, res){   
    res.send('Lista de carreras de la UPS')
})

router.post('/Carrera', function(req, res){  
    console.log(req.body)
    console.log(req.query) 
    res.status(200).send({tipo_error:0, mensaje_error:'', mensaje_exito:'Añádido exitosamente'})
})

app.use( '/', express.static('public'))
app.listen(5000)
console.log( 'La aplicacion esta escuchando en http://localhost:5000' )
