const express = require('express');
const router = express.Router();
const { registrarUsuario, iniciarSesion, obtenerUsuario } = require('../controllers/userController');

router.post('/register', registrarUsuario);
router.post('/login', iniciarSesion);
router.get('/:id', obtenerUsuario);

module.exports = router;