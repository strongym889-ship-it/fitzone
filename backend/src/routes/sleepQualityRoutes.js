const express = require('express');
const router = express.Router();
const { crearRegistroSueno, obtenerSuenoPorUsuario } = require('../controllers/sleepQualityController');
router.post('/', crearRegistroSueno);
router.get('/usuario/:usuarioId', obtenerSuenoPorUsuario);
module.exports = router;