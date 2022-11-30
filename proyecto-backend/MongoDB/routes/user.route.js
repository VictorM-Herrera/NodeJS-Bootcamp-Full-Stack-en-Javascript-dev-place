const express = require('express');
const router = express.Router();
const { 
    getUsers, 
    findUserById, 
    createUser,
    updateUser, 
    deleteUser } = require('../controller/userController');
    const { ValidateUser } = require('../models/user.model');


router.get('/user', getUsers);

router.get('/user/:id',findUserById)

router.post('/user',ValidateUser, createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;