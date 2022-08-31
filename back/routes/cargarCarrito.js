const express = require("express");
const router = express.Router();

const cargarCarrito = require("../controllers/cargarCarrito");

router.get("/cart/:id", cargarCarrito.getItemCart)
router.post("/cart/:id", cargarCarrito.addItemCart)

module.exports = router
