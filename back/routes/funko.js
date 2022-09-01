const express = require("express");
const router = express.Router();

const funko = require("../controllers/funko.js");

router.get("/", funko.all);
router.get("/:search", funko.searchFunko); 
router.get("/:id", funko.singleFunko); 
router.post("/", funko.addFunko);
router.put("/:id", funko.putFunko);
router.delete("/:id", funko.deleteFunko);

module.exports = router;
