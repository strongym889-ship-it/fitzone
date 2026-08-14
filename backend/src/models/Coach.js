const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
  nombre: String,
  especialidad: [String],
  disponibilidad: [String],
  calificacionPromedio: Number,
  clientesAsignados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { collection: 'coaches' });

module.exports = mongoose.model('Coach', coachSchema);