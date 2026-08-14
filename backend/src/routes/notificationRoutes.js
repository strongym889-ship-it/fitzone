const express = require('express');
const router = express.Router();
const { crearNotificacion, obtenerNotificacionesPorUsuario } = require('../controllers/notificationController');
router.post('/', crearNotificacion);
router.get('/usuario/:usuarioId', obtenerNotificacionesPorUsuario);
module.exports = router;