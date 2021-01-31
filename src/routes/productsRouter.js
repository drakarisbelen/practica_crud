/*Archivo de rutas de productos*/

const express = require("express");
const router= express.Router();
const productsController = require("../controllers/productsController");


router.get("/products", productsController.index);

router.get("/products/:id", productsController.show);


//Siempre EXPORTAR router
module.exports=router;
