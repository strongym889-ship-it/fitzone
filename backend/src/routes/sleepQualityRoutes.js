import express from 'express';
import { crearRegistroSueno, obtenerSuenoPorUsuario } from '../controllers/sleepQualityController.js';

const router = express.Router();
router.post('/', crearRegistroSueno);
router.get('/usuario/:usuarioId', obtenerSuenoPorUsuario);

export default router;