const express = require("express");
const router = express.Router();

const carrito = require("../controllers/cart");

router.delete("/:id", carrito.deleteItem);
router.put("/:id", carrito.editItem);
router.post("/:id", carrito.addItem);
router.get("/:id", carrito.allItem);

module.exports = router;
