import express from 'express';
import { crearMedicion, obtenerMedicionesPorUsuario } from '../controllers/physicalMeasurementController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/', verificarToken, crearMedicion);
router.get('/usuario/:usuarioId', verificarToken, verificarDueño, obtenerMedicionesPorUsuario);

export default router;