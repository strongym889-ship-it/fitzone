const mongoose = require('mongoose');
const trainingFrequencySchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  diasPorSemana: Number,
  diasPreferidos: [String],
  horarioPreferido: String
}, { collection: 'training_frequency' });
module.exports = mongoose.model('TrainingFrequency', trainingFrequencySchema);