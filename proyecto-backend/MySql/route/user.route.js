const express = require('express');
const uploadMulter = require('../config/multer.config');
const Router = express.Router();
const controller = require('../controller/user.controller');
const verifytoken = require('../middlewares/authentications');
const { ValidateUser } = require('../models/user.model');



Router.get('/', controller.getAllUsers);

Router.get('/:id', controller.getUserById);

Router.post('/', [uploadMulter.single('image'), ValidateUser],controller.createUser);//public

Router.post('/login', controller.userlogin);//public

Router.put('/:id',[verifytoken, uploadMulter.single('image')], controller.updateUserById);//private

Router.delete('/:id',[verifytoken], controller.deleteUserById);//private

module.exports = Router;