const mongoose = require('mongoose');
const trainingPeriodSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  duracionSemanas: Number,
  fechaInicio: Date,
  fechaFin: Date,
  objetivo: String
}, { collection: 'training_periods' });
module.exports = mongoose.model('TrainingPeriod', trainingPeriodSchema);