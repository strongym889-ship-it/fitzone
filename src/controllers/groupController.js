import Group from '../models/Group.js';

export const crearGrupo = async (req, res) => {
  try { res.status(201).json(await Group.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const obtenerGrupos = async (req, res) => {
  try { res.json(await Group.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};