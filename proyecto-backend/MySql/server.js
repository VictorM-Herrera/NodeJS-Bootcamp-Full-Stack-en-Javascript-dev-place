require('dotenv').config({path: './.env'});
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
//mysql connections:
require('./config/connections');
const router = require('./route/index.route');

//middlewares:
server.use(cors());//standard
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//rutas:
server.use(router);
server.use('/upload', express.static('upload'));

server.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
})

