const Joi = require('joi');
const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');
const validateRequest = require('../middleware/validateRequest');

const User = sequelize.define('users',{
    username:{
        type: Sequelize.STRING,
        primaryKey: true
    }, 
    image: {
        type: Sequelize.TEXT,
        defaultValue: null
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        validate:{
            isEmail:{
                msg: "Debe ser un email valido",
            }
        }
    },
    password:  Sequelize.STRING,
    status:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
} )

const ValidateUser = (req,res,next) => {
    const schema = Joi.object({
        username: Joi.string().min(5).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre",
            'string.min': "El nombre debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el Nombre"
        }),
        email:Joi.string().email().required()
        .messages({
            'email.empty': "Ingresa el email",
            'any.required': "Ingresa el email"
        }),
        password: Joi.string().min(5).max(100).required()
        .messages({
            'password.empty': "Ingresa el password",
             'password.min': "El password debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el password"
        }),

    });
    validateRequest(req,res,next,schema);
}

module.exports ={
    User,
    ValidateUser,
}