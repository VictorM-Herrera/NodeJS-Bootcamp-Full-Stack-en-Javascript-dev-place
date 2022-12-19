const express = require('express');
const uploadMulter = require('../config/multer.config');
const Router = express.Router();
const controller = require('../controller/product.controller');
const { ValidateProduct } = require('../models/product.model');

Router.get('/', controller.getAllProducts);

Router.get('/:id', controller.getByIdProduct);

Router.get('/category/:id', controller.getByCategoryProduct);

Router.post('/',[uploadMulter.single('image'), ValidateProduct], controller.createProduct);

Router.put('/:id', controller.updateProduct);

Router.delete('/:id', controller.deleteProduct);

module.exports = Router;