import express from 'express';
import { crearPeriodo, obtenerPeriodosPorUsuario } from '../controllers/trainingPeriodController.js';

const router = express.Router();
router.post('/', crearPeriodo);
router.get('/usuario/:usuarioId', obtenerPeriodosPorUsuario);

export default router;