const mongoose = require('mongoose');
const trainingParameterSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fecha: { type: Date, default: Date.now },
  ejercicio: String,
  series: Number,
  repeticiones: Number,
  peso: Number,
  duracionMinutos: Number
}, { collection: 'training_parameters' });
module.exports = mongoose.model('TrainingParameter', trainingParameterSchema);