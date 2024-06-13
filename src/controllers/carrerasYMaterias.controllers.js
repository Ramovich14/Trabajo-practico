let carreras = require('../../data/data.carreras.json');
let materias = require('../../data/data.materias.json');

const getAllCarreras = (req, res) => {
    res.status(200).json(carreras);
  }
  
  const getCarreraById = (req, res) => {
    const id = req.params.id;
    const carrera = carreras.find(carrera => carrera.id == id);
    if (carrera) {
      res.status(200).json(carrera);
    } else {
      res.status(404).json({ mensaje: 'Carrera no encontrada' });
    }
  }
  
  const createCarrera = (req, res) => {
    const nuevaCarrera = req.body;
    const id = carreras.length > 0 ? Math.max(...carreras.map(carrera => carrera.id)) + 1 : 1;
    nuevaCarrera.id = id;
    carreras.push(nuevaCarrera);
    res.status(201).json(nuevaCarrera);
  }
  
  const deleteCarreraById = (req, res) => {
    const id = req.params.id;
    const index = carreras.findIndex(carrera => carrera.id == id);
    if (index !== -1) {
      const carreraBorrada = carreras.splice(index, 1)[0];
      materias = materias.filter(materia => materia.carreraId != id);
      res.status(200).json({ mensaje: `La Carrera con ID ${id} fue borrada`, carreraBorrada });
    } else {
      res.status(404).json({ mensaje: 'Carrera no encontrada' });
    }
  }
  
  const getAllMaterias = (req, res) => {
    res.status(200).json(materias);
  }
  
  const getMateriaById = (req, res) => {
    const id = req.params.id;
    const materia = materias.find(materia => materia.id == id);
    if (materia) {
      res.status(200).json(materia);
    } else {
      res.status(404).json({ mensaje: 'Materia no encontrada' });
    }
  }
  
  const createMateria = (req, res) => {
    const nuevaMateria = req.body;
    const id = materias.length > 0 ? Math.max(...materias.map(materia => materia.id)) + 1 : 1;
    nuevaMateria.id = id;
    materias.push(nuevaMateria);
    res.status(201).json(nuevaMateria);
  }
  
  const deleteMateriaById = (req, res) => {
    const id = req.params.id;
    const index = materias.findIndex(materia => materia.id == id);
    if (index !== -1) {
      const materiaBorrada = materias.splice(index, 1)[0];
      res.status(200).json({ mensaje: `La Materia con ID ${id} fue borrada`, materiaBorrada });
    } else {
      res.status(404).json({ mensaje: 'Materia no encontrada' });
    }
  }
  
  const getMateriasByCarreraId = (req, res) => {
    const carreraId = req.params.id;
    const materiasDeCarrera = materias.filter(materia => materia.carreraId == carreraId);
    if (materiasDeCarrera.length > 0) {
      res.status(200).json(materiasDeCarrera);
    } else {
      res.status(404).json({ mensaje: 'No se encontraron materias para esta carrera' });
    }
  };

  module.exports = { 
    getAllCarreras, 
    getCarreraById, 
    createCarrera, 
    deleteCarreraById, 
    getAllMaterias, 
    getMateriaById, 
    createMateria, 
    deleteMateriaById,
    getMateriasByCarreraId, 
    carreras, 
    materias 
  };