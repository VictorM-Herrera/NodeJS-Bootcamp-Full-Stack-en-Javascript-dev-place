const express = require('express');
const server = express();
const port = 5050;
const productRouter = require('./routes/product.route');
const userRouter = require('./routes/user.route');

const mongose = require('mongoose');
const { urlencoded } = require('express');

mongose.connect("mongodb://localhost:27017/store")
    .then(()=> console.log("Conectado a MongoDB"))
    .catch((err) => console.log(err));

server.use((req,res,next)=>{
    res.append('Access-Control-Allow-Origin',['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(productRouter);
server.use(userRouter);


server.listen(port,() =>{
    console.log("BD conectada");
})

