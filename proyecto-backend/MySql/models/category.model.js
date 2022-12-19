const Joi = require('joi');
const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');
const validateRequest = require('../middlewares/validateRequest');

const Category = sequelize.define('categories', {
    category_id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    status:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    }
}, {timestamps: false})
const ValidateCategory = (req,res,next) => {
    const schema = Joi.object({
        name: Joi.string().min(2).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre  de la categoria",
            'string.min': "El nombre de la categoria debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el Nombre  de la categoria"
        })
    });
    validateRequest(req,res,next,schema);
}

module.exports = {
    Category,
    ValidateCategory
}