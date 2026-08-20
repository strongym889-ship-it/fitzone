import express from 'express';
import { crearGrupo, obtenerGrupos } from '../controllers/groupController.js';
import verificarToken, { verificarAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/', obtenerGrupos);
router.post('/', verificarToken, verificarAdmin, crearGrupo);

export default router;