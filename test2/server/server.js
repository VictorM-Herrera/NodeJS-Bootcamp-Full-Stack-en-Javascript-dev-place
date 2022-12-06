require('dotenv').config({path: './.env'});

const express = require('express');
const server = express();
const port = process.env.PORT || 5050;
const cors = require('cors');

require('./config/connections');
const router = require('./router/index.route');


server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(express.static(__dirname));
server.use('/upload', express.static('upload'));

server.use(router);

server.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
})
