const express = require("express");
const router = express.Router();

const cart = require("../controllers/cart");

router.get("/:id", cart.getItemCart)
router.post("/:id", cart.addItemCart)


module.exports = router
