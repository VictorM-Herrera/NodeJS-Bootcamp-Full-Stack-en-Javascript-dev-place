require('dotenv').config({path: './.env'});
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
require('./config/mongo.config');
const recursoRoute = require('./routes/recurso.route');


server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(recursoRoute);

server.listen(port, () =>{
    console.log(`servidor corriendo en el puerto ${port}`);
})