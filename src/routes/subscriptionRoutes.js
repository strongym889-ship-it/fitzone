import express from 'express';
import {
  crearSuscripcion, obtenerSuscripcionPorUsuario, actualizarSuscripcion,
  verificarVencimientos, cambiarPlan, limpiarCanceladas
} from '../controllers/subscriptionController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearSuscripcion);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerSuscripcionPorUsuario);
router.put('/:id', verificarToken, actualizarSuscripcion);
router.get('/verificar-vencimientos', verificarVencimientos);
router.post('/cambiar-plan', verificarToken, cambiarPlan);
router.delete('/limpiar-canceladas/:usuarioId', verificarToken, verificarDueño, limpiarCanceladas);

export default router;