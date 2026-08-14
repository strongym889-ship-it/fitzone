const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  nombre: String,
  duracionDias: Number,
  precio: Number,
  esGratuito: Boolean,
  beneficios: [String]
}, { collection: 'plans' });

module.exports = mongoose.model('Plan', planSchema);