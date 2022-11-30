const mongose = require('mongoose');
require('dotenv').config({path: './.env'});
const mongoPort = process.env.MONGO;

mongose.connect(mongoPort)
    .then(()=>console.log("Conectado con MongoDb"))
    .catch(err => console.log(err));
