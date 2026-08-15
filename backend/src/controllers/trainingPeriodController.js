const TrainingPeriod = require('../models/TrainingPeriod');
exports.crearPeriodo = async (req, res) => {
  try { res.status(201).json(await TrainingPeriod.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerPeriodosPorUsuario = async (req, res) => {
  try { res.json(await TrainingPeriod.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};