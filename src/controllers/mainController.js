const { request } = require("express");

//const users = require('../database/users')

module.exports ={
    
    index: (req,res) => {
        //aca esta el index KBE
        res.send("Estamos en el index");
    },
    about: (req,res) => {
        res.send("Estamos en el about-us");
    },
        /*res.render('index', {
            title: "Listado de Usuarios",
            users: [
                {first_name:'Karina'}, {first_name:'Freyja'}
            ]
        });*/
    
}