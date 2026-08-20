import express from 'express';
import { crearFrecuencia, obtenerFrecuenciaPorUsuario } from '../controllers/trainingFrequencyController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearFrecuencia);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerFrecuenciaPorUsuario);

export default router;