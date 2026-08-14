const mongoose = require('mongoose');
const sleepQualitySchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fecha: { type: Date, default: Date.now },
  horasDormidas: Number,
  calidadPercibida: Number,
  interrupciones: Number
}, { collection: 'sleep_quality' });
module.exports = mongoose.model('SleepQuality', sleepQualitySchema);