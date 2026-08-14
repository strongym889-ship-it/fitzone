const mongoose = require('mongoose');
const groupSchema = new mongoose.Schema({
  nombre: String,
  entrenadorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
  nivel: String,
  horario: String,
  miembros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { collection: 'groups' });
module.exports = mongoose.model('Group', groupSchema);