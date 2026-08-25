import express from 'express';
import {
  registrarUsuario, iniciarSesion, obtenerUsuario,
  solicitarRecuperacion, restablecerPassword, actualizarUsuario
} from '../controllers/userController.js';
import verificarToken, { verificarDueño } from '../middleware/authMiddleware.js';
import { limitarLogin, limitarRegistro, limitarRecuperacion } from '../middleware/rateLimiter.js';
import validar from '../middleware/validar.js';
import { registroSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from '../validators/userValidator.js';

const router = express.Router();
router.post('/register', limitarRegistro, validar(registroSchema), registrarUsuario);
router.post('/login', limitarLogin, validar(loginSchema), iniciarSesion);
router.post('/forgot-password', limitarRecuperacion, validar(forgotPasswordSchema), solicitarRecuperacion);
router.post('/reset-password/:token', validar(resetPasswordSchema), restablecerPassword);
router.get('/:id', verificarToken, verificarDueño, obtenerUsuario);
router.put('/:id', verificarToken, verificarDueño, actualizarUsuario);

export default router;