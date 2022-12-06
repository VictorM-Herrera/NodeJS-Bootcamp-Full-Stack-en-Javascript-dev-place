const { Sequelize } = require('sequelize');
const { database } = require('./db.config');

const DBMysql = new Sequelize(
    database.database,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect
    }
)

module.exports = DBMysql;