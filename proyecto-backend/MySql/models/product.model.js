const Joi = require('joi');
const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');
const validateRequest = require('../middlewares/validateRequest');

const Product = sequelize.define('products',{
    product_id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title: {
        type: Sequelize.STRING,
        unique: true
    },
    description: Sequelize.STRING,
    price:{
        type: Sequelize.DOUBLE,
        defaultValue: 0
    },
    image: {
        type:Sequelize.TEXT,
        defaultValue:null
    },
    stock:{
        type:Sequelize.INTEGER,
        defaultValue: 0
    }
},{
    timestamps: false
}   
)
const ValidateProduct = (req,res,next) =>{
    const schema = Joi.object({
        title: Joi.string().min(3).max(100).required()
        .messages({
            'string.empty': "Ingresa el Nombre del producto",
            'string.min': "El nombre del producto debe ser mayor a 5 caracteres",
            'any.required': "Ingresa el Nombre  del producto"
        }),
        stock: Joi.number().integer().required()
        .messages({
            'number.empty': "Ingresa la cantidad de stock",
            'number.integer': "Ingresa la cantidad de stock",
            'any.required': "Ingresa la cantidad de stock"
        }),
        description: Joi.string().min(5).max(1000)
        .messages({
            'string.empty': "Ingresa una descripcion del producto",
            'string.min': "La descripcion del producto debe ser mayor a 5 caracteres"
        }),
        price: Joi.number().required()
        .messages({
            'number.empty': "Ingresa el precio del producto",
            'any.required': "Ingresa el precio del producto"
        })
    });
    validateRequest(req,res,next,schema);
}

module.exports = {
    Product,
    ValidateProduct
}