import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: String,
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  telefono: String,
  fechaRegistro: { type: Date, default: Date.now },
  rol: { type: String, enum: ['cliente', 'entrenador', 'admin'], default: 'cliente' },
  estadoCuenta: { type: String, enum: ['activo', 'inactivo', 'suspendido'], default: 'activo' },
  entrenadorAsignado: { type: mongoose.Schema.Types.ObjectId, ref: 'Coach' },
  planActual: { type: mongoose.Schema.Types.ObjectId, ref: 'Plan' },
  resetPasswordToken: String,
  resetPasswordExpira: Date
}, { collection: 'users' });

export default mongoose.model('User', userSchema);