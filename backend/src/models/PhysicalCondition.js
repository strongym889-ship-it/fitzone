const mongoose = require('mongoose');
const physicalConditionSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  nivel: { type: String, enum: ['principiante', 'intermedio', 'avanzado'] },
  lesiones: [String],
  restricciones: [String],
  observacionesMedicas: String
}, { collection: 'physical_conditions' });
module.exports = mongoose.model('PhysicalCondition', physicalConditionSchema);