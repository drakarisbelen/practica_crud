//Datos
/*const { propfind } = require("../routes/mainRouter");*/
/*const products = require("../database/products.js");*/


// productsController: Hago un module exports de un objeto literal
module.exports = {
index: (req, res) => {
    res.send(products);
},
show: (req,res) => {
    console.log("param recibido", req.params.id)
    let product = products.find(product => product.id == req.params.id);
    res.send(product);
}   
};