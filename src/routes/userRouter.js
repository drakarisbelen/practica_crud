const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get("/", controller.index);
router.get("/create", controller.create); //Creo archivos primera pantalla GET
router.post("/", controller.store);

module.exports = router;