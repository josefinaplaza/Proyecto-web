//Importamos clases/modulos usados en la clase/componente.
const express = require('express');
const app = express();

//Definimos motor de plantilla para usar ejs
app.set('view engine', 'ejs');

//Definimos el uso de URL Encoded y JSON.
app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

//Referencia al enrutador
app.use('/', require('./router'));

//Definimos que la app se corra en el puerto 4500
app.listen(4500, ()=>{
    console.log('Servidor corriendo en http://localhost:4500');
});