const mongoose = require('mongoose');
const notificationSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tipo: { type: String, enum: ['pago', 'recordatorio', 'entrenamiento', 'sistema'] },
  mensaje: String,
  leida: { type: Boolean, default: false },
  fechaEnvio: { type: Date, default: Date.now }
}, { collection: 'notifications' });
module.exports = mongoose.model('Notification', notificationSchema);