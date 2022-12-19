const express = require('express');
const indexRouter = express.Router();
const userRouter = require('./user.route');

indexRouter.use('/users', userRouter);


module.exports = indexRouter;