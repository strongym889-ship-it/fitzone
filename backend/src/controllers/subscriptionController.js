const Subscription = require('../models/Subscription');
exports.crearSuscripcion = async (req, res) => {
  try { res.status(201).json(await Subscription.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerSuscripcionPorUsuario = async (req, res) => {
  try { res.json(await Subscription.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
