const express = require("express");
const router = express.Router();

const collection = require("../controllers/collection");

router.get("/", collection.allCollection); 
router.post("/", collection.addCollection); 
router.put("/:id", collection.changeCollection); 
router.delete("/:id", collection.destroyCollection); 
module.exports = router