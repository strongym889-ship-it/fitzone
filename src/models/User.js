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
  resetPasswordExpira: Date,

  // Verificación de cuenta por correo
  cuentaVerificada: { type: Boolean, default: true }, // true por defecto: no rompe usuarios existentes
  codigoVerificacion: String,
  codigoVerificacionExpira: Date
}, {
  collection: 'users',
  toJSON: {
    transform: (doc, ret) => {
      delete ret.passwordHash;
      delete ret.resetPasswordToken;
      delete ret.resetPasswordExpira;
      delete ret.codigoVerificacion;
      delete ret.codigoVerificacionExpira;
      return ret;
    }
  }
});

export default mongoose.model('User', userSchema);