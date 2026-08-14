const express = require('express');
const router = express.Router();
const { crearCondicion, obtenerCondicionPorUsuario } = require('../controllers/physicalConditionController');
router.post('/', crearCondicion);
router.get('/usuario/:usuarioId', obtenerCondicionPorUsuario);
module.exports = router;