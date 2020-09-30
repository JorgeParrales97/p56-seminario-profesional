const express = require('express')
const carrera = require('../components/carrera/network')
const docente = require('../components/docente/network')

const routes = function(server) {
    server.use('/Carrera', carrera)
    server.use('/Docente', docente)
}

module.exports = routes