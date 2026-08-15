import express from 'express';
import { crearMedicion, obtenerMedicionesPorUsuario } from '../controllers/physicalMeasurementController.js';

const router = express.Router();
router.post('/', crearMedicion);
router.get('/usuario/:usuarioId', obtenerMedicionesPorUsuario);

export default router;