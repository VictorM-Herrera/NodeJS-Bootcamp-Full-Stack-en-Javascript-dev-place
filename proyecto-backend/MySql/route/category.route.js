const express = require('express');
const Router = express.Router();
const controller = require('../controller/category.controller');
const { ValidateCategory } = require('../models/category.model');

Router.get('/', controller.getAllCategory);

Router.post('/',[ValidateCategory], controller.createCategory);

Router.put('/:id', controller.updateCategoryById);

Router.delete('/:id', controller.deleteCategoryById);

module.exports = Router;
  