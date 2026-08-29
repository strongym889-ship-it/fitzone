import Coach from '../models/Coach.js';

export const crearCoach = async (req, res) => {
  try {
    res.status(201).json(await Coach.create(req.body));
  } catch (e) {
    if (e.code === 11000) return res.status(409).json({ mensaje: 'Ya existe un entrenador con ese nombre' });
    res.status(500).json({ error: e.message });
  }
};

export const obtenerCoaches = async (req, res) => {
  try { res.json(await Coach.find()); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const eliminarCoach = async (req, res) => {
  try {
    const coach = await Coach.findByIdAndDelete(req.params.id);
    if (!coach) return res.status(404).json({ mensaje: 'Entrenador no encontrado' });
    res.json({ mensaje: 'Entrenador eliminado' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};