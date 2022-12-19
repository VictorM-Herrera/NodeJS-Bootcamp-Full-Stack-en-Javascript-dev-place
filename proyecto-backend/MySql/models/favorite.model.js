const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');

const Fav = sequelize.define('favorites',{
    fav_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: Sequelize.INTEGER,
        references:{
            model: 'users',
            key: 'user_id'
        }
    },
    product_id:{
        type: Sequelize.INTEGER,
        references:{
            model: 'products',
            key: 'product_id'
        }
    }
},{timestamps:false})

module.exports = {
    Fav,
}