const Plan = require('../models/Plan');

exports.crearPlan = async (req, res) => {
  try {
    const nuevoPlan = await Plan.create(req.body);
    res.status(201).json(nuevoPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obtenerPlanes = async (req, res) => {
  try {
    const planes = await Plan.find();
    res.json(planes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};