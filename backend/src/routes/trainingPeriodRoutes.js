const express = require('express');
const router = express.Router();
const { crearPeriodo, obtenerPeriodosPorUsuario } = require('../controllers/trainingPeriodController');
router.post('/', crearPeriodo);
router.get('/usuario/:usuarioId', obtenerPeriodosPorUsuario);
module.exports = router;