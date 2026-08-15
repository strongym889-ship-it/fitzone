import express from 'express';
import { crearFrecuencia, obtenerFrecuenciaPorUsuario } from '../controllers/trainingFrequencyController.js';

const router = express.Router();
router.post('/', crearFrecuencia);
router.get('/usuario/:usuarioId', obtenerFrecuenciaPorUsuario);

export default router;