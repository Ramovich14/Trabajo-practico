const Joi = require('joi');

const carreraSchema = Joi.object().keys({
    nombre: Joi.string().min(5).max(60).required().messages({
        "string.min": "El nombre debe tener como mínimo {#limit} caracteres",
        "string.max": "El nombre debe tener como máximo {#limit} caracteres",
        "string.empty": "El nombre no puede estar vacío",
        "any.required": "El nombre es requerido"
    }),
    grado: Joi.string().required().valid("Licenciatura", "Tecnicatura", "Postgrado").messages({
        "any.required": "El grado es requerido",
        "any.only": "Las opciones solo pueden ser Licenciatura, Tecnicatura y Postgrado"
    }),
    universidad: Joi.string().min(3).max(50).required().messages({
        "string.min": "La universidad debe tener como mínimo {#limit} caracteres",
        "string.max": "La universidad debe tener como máximo {#limit} caracteres",
        "string.empty": "La universidad no puede estar vacía",
        "any.required": "La universidad es requerida"
    })
});

module.exports = carreraSchema;