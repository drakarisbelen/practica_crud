//Modulos
const express=require('express');
const app = express();

//Configuracion ruta estatica y engine
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set("views", "src/views");

//Rutas
const mainRouter = require("./routes/mainRouter");
app.use("/", mainRouter);

//Inicializo el servidor
app.listen(3000, ()=> { console.log('Servidor Ok en puerto 3000')});


