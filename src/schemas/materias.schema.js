const Joi = require('joi');

const materiaSchema = Joi.object().keys({
    nombre: Joi.string().min(5).max(50).required().messages({
        "string.min": "El nombre debe tener como mínimo {#limit} caracteres",
        "string.max": "El nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "El nombre no puede estar vacío",
        "any.required": "El nombre es requerido"
    }),
    cuatrimestral: Joi.number().min(1).max(2).messages({
        "number.min": "Cuatrimestral debe ser 1 o 2",
        "number.max": "Cuatrimestral debe ser 1 o 2"
    }),
    anio: Joi.number().min(1).max(5).messages({
        "number.min": "El año debe tener como mínimo {#limit}",
        "number.max": "El año debe tener como máximo {#limit}"
    })   
});

module.exports = materiaSchema;
