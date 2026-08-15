const mongoose = require('mongoose');
const motivationSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  fecha: { type: Date, default: Date.now },
  nivelMotivacion: Number,
  comentario: String
}, { collection: 'motivation' });
module.exports = mongoose.model('Motivation', motivationSchema);