const express = require('express');
const db = require("./config/db.js");

const bodyParse= require('body-parser');

const router = require("./router/router.js") ;
const Usuarios = require('./router/usuarios.js');
const vehiculos = require('./router/vehiculo.js');

const app= express();

   app.use(bodyParse.json())
   app.use(bodyParse.urlencoded({extended:true}))

db.authenticate()
    .then(() => console.log('SUCCES, db connect'))
    .catch(error =>console.log(error));


app.use('/',router)
app.use('/usuario',Usuarios)
app.use('/vehiculo',vehiculos)

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,() => {
    console.log('El servidor esta funcionando')
})

