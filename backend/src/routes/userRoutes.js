import express from 'express';
import {
  registrarUsuario,
  iniciarSesion,
  obtenerUsuario,
  solicitarRecuperacion,
  restablecerPassword
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/:id', obtenerUsuario);
router.post('/forgot-password', solicitarRecuperacion);
router.post('/reset-password/:token', restablecerPassword);

export default router;