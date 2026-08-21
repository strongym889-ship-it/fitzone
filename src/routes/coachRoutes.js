import express from 'express';
import { crearCoach, obtenerCoaches, eliminarCoach } from '../controllers/coachController.js';
import verificarToken, { verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', obtenerCoaches);
router.post('/', verificarToken, verificarAdmin, crearCoach);
router.delete('/:id', verificarToken, verificarAdmin, eliminarCoach);

export default router;