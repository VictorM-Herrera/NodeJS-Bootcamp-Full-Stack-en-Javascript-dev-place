const express = require('express');
const router = express.Router();
const {getProducts, createProduct, findProductById, updateProduct, deleteProduct} = require('../controller/product.controller');

router.get('/product', getProducts);

router.get('/product/:id',findProductById)

router.post('/product', createProduct);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

module.exports = router;