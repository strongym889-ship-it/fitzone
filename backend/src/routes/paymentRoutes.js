const express = require('express');
const router = express.Router();
const { crearPago, obtenerPagosPorUsuario } = require('../controllers/paymentController');
router.post('/', crearPago);
router.get('/usuario/:usuarioId', obtenerPagosPorUsuario);
module.exports = router;