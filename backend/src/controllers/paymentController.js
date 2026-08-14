const Payment = require('../models/Payment');
exports.crearPago = async (req, res) => {
  try { res.status(201).json(await Payment.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerPagosPorUsuario = async (req, res) => {
  try { res.json(await Payment.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};