const express = require("express");
const router = express.Router();
const { validateAuth } = require("../config/authentication");

const user = require("../controllers/user");

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/me", validateAuth, user.me);
router.post("/logout", user.logout);
router.get("/all", user.all);
router.delete("/:id", user.deleteUser);
router.put("/:id", user.put);
router.put("/:id/noAdmin", user.putAdminFalse); 
router.put("/:id/admin", user.putAdminTrue); 

module.exports = router;
