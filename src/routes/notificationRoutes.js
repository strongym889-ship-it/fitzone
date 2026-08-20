import express from 'express';
import { crearNotificacion, obtenerNotificacionesPorUsuario } from '../controllers/notificationController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearNotificacion);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerNotificacionesPorUsuario);

export default router;