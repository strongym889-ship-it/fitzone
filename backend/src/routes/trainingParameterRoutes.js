import express from 'express';
import { crearParametro, obtenerParametrosPorUsuario } from '../controllers/trainingParameterController.js';

const router = express.Router();
router.post('/', crearParametro);
router.get('/usuario/:usuarioId', obtenerParametrosPorUsuario);

export default router;