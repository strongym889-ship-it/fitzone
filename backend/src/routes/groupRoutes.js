import express from 'express';
import { crearGrupo, obtenerGrupos } from '../controllers/groupController.js';

const router = express.Router();
router.post('/', crearGrupo);
router.get('/', obtenerGrupos);

export default router;