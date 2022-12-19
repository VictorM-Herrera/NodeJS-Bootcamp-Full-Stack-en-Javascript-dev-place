const Joi = require('joi');
const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');
const validateRequest = require('../middlewares/validateRequest');

const Coment = sequelize.define('coments',{
    coment_id:{
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
    },
    message: Sequelize.STRING
},{timestamps:false})

const ValidateComent = (req,res,next) => {
    const schema = Joi.object({
        message: Joi.string().min(5).max(300).required()
        .messages({
            'string.empty': "Ingresa un comentario",
            'string.min': "El comentario es demasiado corto",
            'any.required': "Ingresa un comentario"
        })
    });
    validateRequest(req,res,next, schema);
}

module.exports = {
    Coment,
    ValidateComent,
} 