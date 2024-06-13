const {Router} = require('express');
const carrerasYMateriasControllers = require('../controllers/carrerasYMaterias.controllers');
const materiasMiddleware = require('../middlewares/materias.middleware');
const route = Router();

route.get('/data.materias', carrerasYMateriasControllers.getAllMaterias);
route.get('/data.materias/:id', materiasMiddleware.existeMateriaById, carrerasYMateriasControllers.getMateriaById);
route.delete('/data.materias/:id', materiasMiddleware.existeMateriaById, carrerasYMateriasControllers.deleteMateriaById);

module.exports = route;