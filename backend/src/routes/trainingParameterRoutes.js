const express = require('express');
const router = express.Router();
const { crearParametro, obtenerParametrosPorUsuario } = require('../controllers/trainingParameterController');
router.post('/', crearParametro);
router.get('/usuario/:usuarioId', obtenerParametrosPorUsuario);
module.exports = router;