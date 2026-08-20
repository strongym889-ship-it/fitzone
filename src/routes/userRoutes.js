import express from 'express';
import {
  registrarUsuario, iniciarSesion, obtenerUsuario,
  solicitarRecuperacion, restablecerPassword, actualizarUsuario
} from '../controllers/userController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/register', registrarUsuario);
router.post('/login', iniciarSesion);
router.post('/forgot-password', solicitarRecuperacion);
router.post('/reset-password/:token', restablecerPassword);
router.get('/:id', verificarToken, verificarDueño, obtenerUsuario);
router.put('/:id', verificarToken, verificarDueño, actualizarUsuario);

export default router;