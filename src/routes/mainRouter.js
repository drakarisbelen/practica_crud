/*Archivo de rutas de pag. principal*/
const express = require('express');
const router = express.Router();
const controller = require("../controllers/mainController");

//Metodo get para leer la ruta que voy a acceder
router.get("/", controller.index );

router.get("/acerca-de", controller.about);


module.exports = router;

