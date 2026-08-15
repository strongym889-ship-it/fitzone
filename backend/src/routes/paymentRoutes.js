import express from 'express';
import { crearPago, obtenerPagosPorUsuario } from '../controllers/paymentController.js';

const router = express.Router();
router.post('/', crearPago);
router.get('/usuario/:usuarioId', obtenerPagosPorUsuario);

export default router;