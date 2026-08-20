import express from 'express';
import { crearCoach, obtenerCoaches } from '../controllers/coachController.js';
import verificarToken, { verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', obtenerCoaches);
router.post('/', verificarToken, verificarAdmin, crearCoach);

export default router;