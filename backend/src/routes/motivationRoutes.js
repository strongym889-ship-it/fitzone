import express from 'express';
import { crearRegistroMotivacion, obtenerMotivacionPorUsuario } from '../controllers/motivationController.js';

const router = express.Router();
router.post('/', crearRegistroMotivacion);
router.get('/usuario/:usuarioId', obtenerMotivacionPorUsuario);

export default router;