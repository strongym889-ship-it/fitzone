const express = require('express');
const router = express.Router();
const { crearRegistroAlimentacion, obtenerAlimentacionPorUsuario } = require('../controllers/dietaryControlController');
router.post('/', crearRegistroAlimentacion);
router.get('/usuario/:usuarioId', obtenerAlimentacionPorUsuario);
module.exports = router;