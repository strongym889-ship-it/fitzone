import express from 'express';
import { crearCoach, obtenerCoaches } from '../controllers/coachController.js';

const router = express.Router();
router.post('/', crearCoach);
router.get('/', obtenerCoaches);

export default router;