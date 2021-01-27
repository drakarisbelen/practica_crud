const express = require("express");
const router= express.Router();
const productsController = require("../productsController.js");


router.get("/", productsController.index);

router.get("/:id", productsController.show);


//Siempre EXPORTAR router
module.exports=router;