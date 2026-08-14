const express = require('express');
const router = express.Router();
const { crearSuscripcion, obtenerSuscripcionPorUsuario } = require('../controllers/subscriptionController');
router.post('/', crearSuscripcion);
router.get('/usuario/:usuarioId', obtenerSuscripcionPorUsuario);
module.exports = router;