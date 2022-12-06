const express = require('express');
const router = express.Router();
const { 
    getUsers, 
    findUserById, 
    createUser,
    updateUser, 
    deleteUser, 
    findLoggedUser} = require('../controller/userController');
    const { ValidateUser } = require('../models/user.model');


router.get('/user', getUsers);

router.get('/user/logged/:email', findLoggedUser);

router.get('/user/id/:id',findUserById)

router.post('/user',ValidateUser, createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;