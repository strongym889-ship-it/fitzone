import express from 'express';
import { crearPago, obtenerPagosPorUsuario } from '../controllers/paymentController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearPago);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerPagosPorUsuario);

export default router;