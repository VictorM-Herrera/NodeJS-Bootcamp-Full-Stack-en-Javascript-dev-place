const express = require('express');
const route = express.Router();
const { getRecursosById, getAll, createRecurso, updateRecurso} = require('../controller/recursosController')

route.get('/recursos', getAll);
route.get('/recursos/:idRecurso', getRecursosById);

//actualizar y crear:

route.post('/recursos', createRecurso);

route.put('/recursos/:idRecurso', updateRecurso);

module.exports = route;