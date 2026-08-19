import express from 'express';
import {
  crearSuscripcion,
  obtenerSuscripcionPorUsuario,
  actualizarSuscripcion,
  verificarVencimientos,
  cambiarPlan
} from '../controllers/subscriptionController.js';

const router = express.Router();
router.post('/', crearSuscripcion);
router.get('/usuario/:usuarioId', obtenerSuscripcionPorUsuario);
router.put('/:id', actualizarSuscripcion);
router.get('/verificar-vencimientos', verificarVencimientos);
router.post('/cambiar-plan', cambiarPlan);

export default router;