const express = require("express");
const router = express.Router();
const { validateAuth } = require("../config/authentication");

const cart = require("../controllers/cart");

// router.get("/:id", validateAuth,cart.getItemCart)
router.get("/:id", cart.getItemCart)
router.post("/:id", cart.addItemCart)
router.delete("/:id",cart.deleteCart)

module.exports = router
