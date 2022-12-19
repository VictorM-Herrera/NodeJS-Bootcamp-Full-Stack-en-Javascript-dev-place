//requires delas rutas:
const userRouter = require('./user.route');
const productRouter = require('./product.route');
const categoryRouter = require('./category.route');
const comentRouter = require('./coment.route');
const favRoter = require('./favorite.route');
//express:
const express = require('express');
const indexRouter = express.Router();

//Uso de las rutas:
indexRouter.use('/users', userRouter);
indexRouter.use('/product', productRouter);
indexRouter.use('/category', categoryRouter);
indexRouter.use('/coment', comentRouter);
indexRouter.use('/fav', favRoter);



module.exports = indexRouter;