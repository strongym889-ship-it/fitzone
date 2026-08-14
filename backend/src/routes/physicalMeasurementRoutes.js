const express = require('express');
const router = express.Router();
const { crearMedicion, obtenerMedicionesPorUsuario } = require('../controllers/physicalMeasurementController');
router.post('/', crearMedicion);
router.get('/usuario/:usuarioId', obtenerMedicionesPorUsuario);
module.exports = router;