import express from 'express';
import { crearSuscripcion, obtenerSuscripcionPorUsuario } from '../controllers/subscriptionController.js';

const router = express.Router();
router.post('/', crearSuscripcion);
router.get('/usuario/:usuarioId', obtenerSuscripcionPorUsuario);

export default router;