const express = require('express');
const router = express.Router();
const { crearFrecuencia, obtenerFrecuenciaPorUsuario } = require('../controllers/trainingFrequencyController');
router.post('/', crearFrecuencia);
router.get('/usuario/:usuarioId', obtenerFrecuenciaPorUsuario);
module.exports = router;