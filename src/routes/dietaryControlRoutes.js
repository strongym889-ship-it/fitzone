import express from 'express';
import { crearRegistroAlimentacion, obtenerAlimentacionPorUsuario } from '../controllers/dietaryControlController.js';

const router = express.Router();
router.post('/', crearRegistroAlimentacion);
router.get('/usuario/:usuarioId', obtenerAlimentacionPorUsuario);

export default router;