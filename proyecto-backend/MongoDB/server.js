require('dotenv').config({path: './.env'});
const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const userRoutes = require('./routes/user.route');
require('./config/mongo.config');

server.use(express.json());
server.use(express.urlencoded({extended:true}));
//cors:
server.use((req,res,next)=>{
    res.append('Access-Control-Allow-Origin',['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
server.use(userRoutes);

server.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})