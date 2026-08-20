import express from 'express';
import { crearRegistroSueno, obtenerSuenoPorUsuario } from '../controllers/sleepQualityController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearRegistroSueno);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerSuenoPorUsuario);

export default router;