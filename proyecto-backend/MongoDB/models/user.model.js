const Joi = require('joi');
const mongose = require('mongoose');
const validateRequest = require('../middlewares/validateRequest');
const Schema = mongose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
    },
    pass:{
        type:String,
        required: true
    }
})

const User = mongose.model('users', UserSchema);

const ValidateUser = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(5).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre del Usuario",
            'string.min': "el nombre del Usuario debe ser mayor a 5 caracteres",
            'any.required': "ingresa el Nombre del Usuario"
        }),
        email: Joi.string().email().min(5).max(100).required()
        .messages({
            'string.empty': "Ingresa el Email del Usuario",
            'string.min': "el Email del Usuario debe ser mayor a 5 caracteres",
            'any.required': "ingresa el Email del Usuario"
        }),
        pass: Joi.string().min(5).max(100).required()
        .messages({
            'string.empty': "Ingresa la contraseña del Usuario",
            'string.min': "la contraseña del Usuario debe ser mayor a 5 caracteres",
            'any.required': "ingresa la contraseña del Usuario"
        }),
    });
    validateRequest(req,res,next,schema);
}

module.exports = {
    User,
    ValidateUser,
}