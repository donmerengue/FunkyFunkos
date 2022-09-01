const express = require("express");

//requerimos Controllers
const user = require("./user");
const funko = require('./funko');
const cart = require('./cart'); 
const collection = require('./collection'); 

//Redireccionamos las rutas
const router = express.Router();
router.use('/user', user);
router.use('/funkos', funko);
router.use('/cart', cart);
router.use('/collection', collection);

// GET DE PRUEBA ---> CORRE EL SERVIDOR
router.get('/*', (req, res) => {
    res.status(200).json('HOLA SOMOS FUNKYFUNKOS!!!!');
})

module.exports = router;