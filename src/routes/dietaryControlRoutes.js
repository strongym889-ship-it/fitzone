import express from 'express';
import { crearRegistroAlimentacion, obtenerAlimentacionPorUsuario } from '../controllers/dietaryControlController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearRegistroAlimentacion);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerAlimentacionPorUsuario);

export default router;