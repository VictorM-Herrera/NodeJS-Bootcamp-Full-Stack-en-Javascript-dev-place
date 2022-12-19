const express = require('express');
const Router = express.Router();
const controller = require('../controller/favorite.controller');

Router.get('/', controller.getAllFavorites);

Router.get('/:id', controller.getAllUserFavorites);

Router.post('/', controller.manageFavorites);

module.exports = Router;
