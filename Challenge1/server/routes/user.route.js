const express = require('express');
const router = express.Router();
const { getUsers, findUserById, createUser, updateUser, deleteUser } = require('../controller/user.controller');

router.get('/user', getUsers);

router.get('/user/:id',findUserById)

router.post('/user', createUser);

router.put('/user/:id', updateUser);

router.delete('/user/:id', deleteUser);

module.exports = router;