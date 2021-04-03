const express = require("express");
const { registerDoctor, loginDoctor, getDoctor } = require("../controller/doctorController");
const router = express.Router();

router.post("/register", registerDoctor);
router.post("/login", loginDoctor);
router.get("/",getDoctor)

module.exports = router;
