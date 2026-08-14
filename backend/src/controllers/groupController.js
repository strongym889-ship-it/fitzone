const Group = require('../models/Group');
exports.crearGrupo = async (req, res) => {
  try { res.status(201).json(await Group.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};
exports.obtenerGrupos = async (req, res) => {
  try { res.json(await Group.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};