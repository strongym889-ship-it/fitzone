const Motivation = require('../models/Motivation');
exports.crearRegistroMotivacion = async (req, res) => {
  try { res.status(201).json(await Motivation.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerMotivacionPorUsuario = async (req, res) => {
  try { res.json(await Motivation.find({ usuarioId: req.params.usuarioId }).sort({ fecha: -1 })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};