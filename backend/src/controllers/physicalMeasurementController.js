const PhysicalMeasurement = require('../models/PhysicalMeasurement');
exports.crearMedicion = async (req, res) => {
  try { res.status(201).json(await PhysicalMeasurement.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerMedicionesPorUsuario = async (req, res) => {
  try { res.json(await PhysicalMeasurement.find({ usuarioId: req.params.usuarioId }).sort({ fecha: -1 })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
