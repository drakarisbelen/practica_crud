//Para leer filesystem
const fs = require('fs');
const path = require('path');

const usersFile = path.join(__dirname, "../database/users.json");

let users = fs.readFileSync(usersFile, 'utf-8');

users = JSON.parse(users);

//console.log(users);


module.exports = {
    index: (req, res) => { 
        //linea de prueba para checkear que llegue el json    
        //res.send(users); 
        res.render('users/index', {
        title: 'Listado de usuarios',
        users:users
        });
    },
    //arrow function con un request y un response
    create: (req,res) => {
        res.render('users/create');
    },
    store: (req,res) => {
        res.send(req.body);
    }
};



