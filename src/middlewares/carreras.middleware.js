const {carreras} = require('../controllers/carrerasYMaterias.controllers')

const hayCarreras = (req, res, next) => {
    if (carreras && carreras.length > 0) {
        next();
    } else {
        res.status(404).json({ mensaje: "No existen carreras :(" });
    }
};

const existeCarreraById = (req, res, next) => {
    const { id } = req.params;
    const carrera = carreras.find(c => c.id == id);
    if (!carrera) {
        res.status(404).json({ error: `No se encuentra la carrera ${id}` });
    } else {
        next();
    }
};

module.exports = { hayCarreras, existeCarreraById };