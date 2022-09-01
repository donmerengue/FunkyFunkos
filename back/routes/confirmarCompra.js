const express = require("express");
const router = express.Router();

const confirmarCompra = require("../controllers/confirCompra");

router.delete("/compra",confirmarCompra.vaciarCarrito )
router.post("/compra", confirmarCompra.cargarOrderItems)


module.exports = router