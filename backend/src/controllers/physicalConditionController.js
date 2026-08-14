const PhysicalCondition = require('../models/PhysicalCondition');
exports.crearCondicion = async (req, res) => {
  try { res.status(201).json(await PhysicalCondition.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerCondicionPorUsuario = async (req, res) => {
  try { res.json(await PhysicalCondition.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};