import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Subscription from '../models/Subscription.js';
import transporter from '../config/mailer.js';

// Registro
export const registrarUsuario = async (req, res) => {
  try {
    const { nombre, email, password, telefono } = req.body;
    const existe = await User.findOne({ email });
    if (existe) return res.status(400).json({ mensaje: 'El correo ya está registrado' });

    const passwordHash = await bcrypt.hash(password, 10);

    // Busca el plan gratuito ya creado en la colección "plans"
    const planGratuito = await Plan.findOne({ esGratuito: true });
    if (!planGratuito) return res.status(500).json({ mensaje: 'No existe un plan gratuito configurado en la base de datos' });

    const nuevoUsuario = await User.create({
      nombre, email, passwordHash, telefono,
      planActual: planGratuito._id
    });

    // Crea la suscripción gratuita de 3 días automáticamente
    const fechaInicio = new Date();
    const fechaFin = new Date();
    fechaFin.setDate(fechaFin.getDate() + planGratuito.duracionDias);

    await Subscription.create({
      usuarioId: nuevoUsuario._id,
      planId: planGratuito._id,
      fechaInicio,
      fechaFin,
      estado: 'activa'
    });

    res.status(201).json({ mensaje: 'Usuario registrado con plan gratuito de 3 días', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Inicio de sesión
export const iniciarSesion = async (req, res) => {
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

// Obtener perfil
export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await User.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Solicitar recuperación de contraseña
export const solicitarRecuperacion = async (req, res) => {
  try {
    const { email } = req.body;
    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(404).json({ mensaje: 'No existe una cuenta con ese correo' });

    const token = crypto.randomBytes(32).toString('hex');
    usuario.resetPasswordToken = token;
    usuario.resetPasswordExpira = Date.now() + 3600000; // 1 hora
    await usuario.save();

    const enlace = `http://localhost:4000/api/users/reset-password/${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: usuario.email,
      subject: 'Recuperación de contraseña - FitZone',
      html: `<p>Hola ${usuario.nombre},</p>
             <p>Solicitaste recuperar tu contraseña. Este enlace vence en 1 hora:</p>
             <a href="${enlace}">${enlace}</a>`
    });

    res.json({ mensaje: 'Se envió un correo con las instrucciones' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Restablecer contraseña
export const restablecerPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;

    const usuario = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpira: { $gt: Date.now() }
    });

    if (!usuario) return res.status(400).json({ mensaje: 'Token inválido o expirado' });

    usuario.passwordHash = await bcrypt.hash(password, 10);
    usuario.resetPasswordToken = undefined;
    usuario.resetPasswordExpira = undefined;
    await usuario.save();

    res.json({ mensaje: 'Contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};