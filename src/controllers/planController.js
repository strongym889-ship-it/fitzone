import Plan from '../models/Plan.js';

export const crearPlan = async (req, res) => {
  try { res.status(201).json(await Plan.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const obtenerPlanes = async (req, res) => {
  try { res.json(await Plan.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};