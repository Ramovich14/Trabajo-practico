const { materias } = require('../controllers/carrerasYMaterias.controllers');

const hayMaterias = (req, res, next) => {
    if (materias && materias.length > 0) {
        next();
    } else {
        res.status(404).json({ mensaje: "No existen materias :(" });
    }
};

const existeMateriaById = (req, res, next) => {
    const { id } = req.params;
    const materia = materias.find(m => m.id == id);
    if (!materia) {
        res.status(404).json({ error: `No se encuentra la materia con id ${id}` });
    } else {
        req.materia = materia; // Adjunta la materia al request para su uso posterior
        next();
    }
};

module.exports = { hayMaterias, existeMateriaById };
