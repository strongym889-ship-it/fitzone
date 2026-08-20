import express from 'express';
import { crearRegistroMotivacion, obtenerMotivacionPorUsuario } from '../controllers/motivationController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearRegistroMotivacion);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerMotivacionPorUsuario);

export default router;