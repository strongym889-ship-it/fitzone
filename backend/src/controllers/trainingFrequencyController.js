const TrainingFrequency = require('../models/TrainingFrequency');
exports.crearFrecuencia = async (req, res) => {
  try { res.status(201).json(await TrainingFrequency.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerFrecuenciaPorUsuario = async (req, res) => {
  try { res.json(await TrainingFrequency.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};