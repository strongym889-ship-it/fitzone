import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  nombre: String,
  duracionDias: Number,
  precio: Number,
  esGratuito: Boolean,
  beneficios: [String]
}, { collection: 'plans' });

export default mongoose.model('Plan', planSchema);