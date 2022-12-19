const Joi = require('joi');
const Sequelize = require('sequelize');
const sequelize = require('../config/mysql.config');
const validateRequest = require('../middlewares/validateRequest');

const RateProducts = sequelize.define('rate_products',{
    rateProducts_id:{
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
    rate:{
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
},{timestamps:false})

const ValidateRateProducts = (req,res,next) => {
    const schema = Joi.object({
        rate: Joi.number().integer().required()
        .messages({
            'number.empty': "Ingresa la valoracion del producto",
            'number.integer': "Ingresa la valoracion del producto",
            'any.required': "Ingresa la cvaloracion del producto"
        })
    });
    validateRequest(req,res,next, schema);
}

module.exports = {
    RateProducts,
    ValidateRateProducts,
} 