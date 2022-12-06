const { User } = require('../models/user.model');
const DBMysql = require('./mysql.config');


User.sync();

DBMysql.sync()
    .then(()=> console.log("Conectado con exito a MySql"))
    .catch(err=> console.log(err));