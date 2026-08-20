import express from 'express';
import { crearParametro, obtenerParametrosPorUsuario } from '../controllers/trainingParameterController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearParametro);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerParametrosPorUsuario);

export default router;