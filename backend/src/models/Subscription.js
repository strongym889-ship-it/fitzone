const mongoose = require('mongoose');
const subscriptionSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  planId: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  fechaInicio: Date,
  fechaFin: Date,
  estado: { type: String, enum: ['activa', 'vencida', 'cancelada'], default: 'activa' }
}, { collection: 'subscriptions' });
module.exports = mongoose.model('Subscription', subscriptionSchema);