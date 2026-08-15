import Notification from '../models/Notification.js';

export const crearNotificacion = async (req, res) => {
  try { res.status(201).json(await Notification.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const obtenerNotificacionesPorUsuario = async (req, res) => {
  try { res.json(await Notification.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};