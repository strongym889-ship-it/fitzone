const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, telefono } = req.body;
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'El correo ya está registrado' });

    const passwordHash = await bcrypt.hash(password, 10);
    const nuevoUsuario = await User.create({ nombre, email, passwordHash, telefono });

    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.iniciarSesion = async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const passwordValido = await bcrypt.compare(password, usuario.passwordHash);
    if (!passwordValido) return res.status(401).json({ mensaje: 'Contraseña incorrecta' });

    const token = jwt.sign({ id: usuario._id, rol: usuario.rol }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ mensaje: 'Sesión iniciada', token, usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerUsuario = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};