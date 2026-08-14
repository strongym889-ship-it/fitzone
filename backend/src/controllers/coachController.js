const Coach = require('../models/Coach');

exports.crearCoach = async (req, res) => {
  try {
    const nuevoCoach = await Coach.create(req.body);
    res.status(201).json(nuevoCoach);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find();
    res.json(coaches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};