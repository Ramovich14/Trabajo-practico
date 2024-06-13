const {Router} = require('express');

const carrerasYMateriasControllers = require('../controllers/carrerasYMaterias.controllers');
const carrerasMiddleware = require('../middlewares/carreras.middleware');
const materiasMiddleware = require('../middlewares/materias.middleware');
const schemaValidator = require('../middlewares/schemaValidator');
const carreraSchema = require('../schemas/carreras.schema');
const materiaSchema = require('../schemas/materias.schema');
const route = Router ()


route.get('/data.carreras', carrerasMiddleware.hayCarreras, carrerasYMateriasControllers.getAllCarreras);
route.get('/data.carreras/:id', carrerasMiddleware.hayCarreras, carrerasMiddleware.existeCarreraById, carrerasYMateriasControllers.getCarreraById);
route.post('/data.carreras', schemaValidator(carreraSchema), carrerasYMateriasControllers.createCarrera);
route.post('/data.carreras/:id/data.materias',schemaValidator(materiaSchema),carrerasYMateriasControllers.createMateria )
route.get('/data.carreras/:id/data.materias',carrerasYMateriasControllers.getMateriasByCarreraId)
route.delete('/data.carreras/:id', carrerasMiddleware.hayCarreras,carrerasMiddleware.existeCarreraById,carrerasYMateriasControllers.deleteCarreraById);

module.exports = route;
