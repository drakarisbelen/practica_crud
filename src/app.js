//Modulos
const express=require('express');
const app = express();
const path = require('path');

//Configuracion ruta estatica y engine
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));
//console.log(app.use(express.static('public')));

app.set("view engine", "ejs");
//app.set("views", "src/views");

//PARA PODER UTILZAR EL POST DE LOS FORMS
app.use(express.urlencoded({ extended: false }));


//Rutas que voy a utilizar en mi sitio
const mainRouter = require("./routes/mainRouter");
const productsRouter = require("./routes/productsRouter");
const userRouter = require("./routes/userRouter");

app.use('/users', userRouter);
app.use("/", mainRouter);
app.use("/products", productsRouter);



//Inicializo el servidor
app.listen(3000, ()=> { console.log('⭐⭐ Servidor Ok en puerto 3000 ⭐⭐')});


