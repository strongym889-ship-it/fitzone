import Coach from '../models/Coach.js';

export const crearCoach = async (req, res) => {
  try { res.status(201).json(await Coach.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const obtenerCoaches = async (req, res) => {
  try { res.json(await Coach.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};