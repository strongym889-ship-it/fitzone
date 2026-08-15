import express from 'express';
import { crearNotificacion, obtenerNotificacionesPorUsuario } from '../controllers/notificationController.js';

const router = express.Router();
router.post('/', crearNotificacion);
router.get('/usuario/:usuarioId', obtenerNotificacionesPorUsuario);

export default router;