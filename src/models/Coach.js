import mongoose from 'mongoose';

const coachSchema = new mongoose.Schema({
  nombre: String,
  especialidad: [String],
  disponibilidad: [String],
  calificacionPromedio: Number,
  clientesAsignados: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { collection: 'coaches' });

export default mongoose.model('Coach', coachSchema);