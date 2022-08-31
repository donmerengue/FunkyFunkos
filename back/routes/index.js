const express = require("express");

//requerimos Controllers
const user = require("./user");
const funko = require('./funko')
const cart = require('./cart')
const cargarCarrito = require('./cargarCarrito')

//Redireccionamos las rutas
const router = express.Router();
router.use('/user', user)
router.use('/funkos', funko)
router.use('/cart', cart)
router.use('/cargarCarrito', cargarCarrito)

// GET DE PRUEBA ---> CORRE EL SERVIDOR
router.get ('/*', (req,res)=> {
    res.send('HOLA SOMOS FUNKYFUNKOS!!!!')
}) 

module.exports = router;