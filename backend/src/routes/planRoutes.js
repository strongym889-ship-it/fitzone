import express from 'express';
import { crearPlan, obtenerPlanes } from '../controllers/planController.js';

const router = express.Router();
router.post('/', crearPlan);
router.get('/', obtenerPlanes);

export default router;