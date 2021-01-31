const { request } = require("express");

//const users = require('../database/users')

//El cliente hace un request del home
//el servidor de node recibe el pedido y se lo manda a la ruta
//la ruta se lo manda al controllador y 
//El servidor de node nos deja ver los parametros y el query string

//El controllador decide si necesita alguna info 
//
module.exports ={
    index: (req,res) => {
        //aca esta el index KBE
        res.render('index',  {title: 'Listado de Usuarios'});
    },
    about: (req,res) => {
        res.send("Estamos en el about-us");
    }
        /*res.render('index', {
            title: "Listado de Usuarios",
            users: [
                {first_name:'Karina'}, {first_name:'Freyja'}
            ]
        });*/

        
    
}