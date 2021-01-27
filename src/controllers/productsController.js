//Datos
const { propfind } = require("../routes/mainRouter");
const products = require("../database/products.js");

console.log(products);

// productsController: Hago un module exports de un objeto literal
module.exports = {
index: (req, res) => {
    res.send(products);
},
show: (req,res) => {
    /*for (let i = 0;  i <products.lenght; i++){
        if (products[i].id === req.params.id){
            return products[i];
        }
        else
        {
            return false;
        }
        }
    }*/
    let product = products.find(product => product.id == req.params.id);
    res.send(product);

}
};