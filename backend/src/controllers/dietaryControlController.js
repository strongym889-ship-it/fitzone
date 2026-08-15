const DietaryControl = require('../models/DietaryControl');
exports.crearRegistroAlimentacion = async (req, res) => {
  try { res.status(201).json(await DietaryControl.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerAlimentacionPorUsuario = async (req, res) => {
  try { res.json(await DietaryControl.find({ usuarioId: req.params.usuarioId }).sort({ fecha: -1 })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};