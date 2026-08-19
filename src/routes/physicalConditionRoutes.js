import express from 'express';
import { crearCondicion, obtenerCondicionPorUsuario } from '../controllers/physicalConditionController.js';

const router = express.Router();
router.post('/', crearCondicion);
router.get('/usuario/:usuarioId', obtenerCondicionPorUsuario);

export default router;