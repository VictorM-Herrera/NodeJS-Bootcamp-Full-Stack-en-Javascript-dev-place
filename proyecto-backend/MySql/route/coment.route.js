const express = require('express');
const Router = express.Router();
const controller = require('../controller/coment.controller');
const { ValidateComent } = require('../models/coment.model');

Router.get('/', controller.getAllComents);

Router.get('/:id', controller.getAllComentsByProductId);

Router.post('/', [ValidateComent], controller.createComent);

Router.put('/:comentId/:userId', controller.updateComent);

Router.delete('/:comentId/:userId', controller.deleteComentbyUserId);

module.exports = Router;