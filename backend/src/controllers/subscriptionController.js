import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import Notification from '../models/Notification.js';

export const crearSuscripcion = async (req, res) => {
  try { res.status(201).json(await Subscription.create(req.body)); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const obtenerSuscripcionPorUsuario = async (req, res) => {
  try { res.json(await Subscription.find({ usuarioId: req.params.usuarioId })); }
  catch (e) { res.status(500).json({ error: e.message }); }
};

export const actualizarSuscripcion = async (req, res) => {
  try {
    const suscripcion = await Subscription.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!suscripcion) return res.status(404).json({ mensaje: 'Suscripción no encontrada' });
    res.json(suscripcion);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

export const verificarVencimientos = async (req, res) => {
  try {
    const ahora = new Date();
    const enUnDia = new Date();
    enUnDia.setDate(enUnDia.getDate() + 1);

    const porVencer = await Subscription.find({
      estado: 'activa',
      fechaFin: { $gte: ahora, $lte: enUnDia }
    });

    let notificacionesCreadas = 0;

    for (const sub of porVencer) {
      const yaNotificado = await Notification.findOne({
        usuarioId: sub.usuarioId,
        tipo: 'recordatorio',
        leida: false
      });

      if (!yaNotificado) {
        await Notification.create({
          usuarioId: sub.usuarioId,
          tipo: 'recordatorio',
          mensaje: 'Tu plan vence en menos de 24 horas. Renueva para no perder acceso.',
          leida: false
        });
        notificacionesCreadas++;
      }
    }

    const vencidas = await Subscription.updateMany(
      { estado: 'activa', fechaFin: { $lt: ahora } },
      { $set: { estado: 'vencida' } }
    );

    res.json({
      mensaje: 'Verificación completada',
      notificacionesEnviadas: notificacionesCreadas,
      suscripcionesVencidas: vencidas.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const cambiarPlan = async (req, res) => {
  try {
    const { usuarioId, nuevoPlanId } = req.body;

    const nuevoPlan = await Plan.findById(nuevoPlanId);
    if (!nuevoPlan) return res.status(404).json({ mensaje: 'Plan no encontrado' });

    await Subscription.updateMany(
      { usuarioId, estado: 'activa' },
      { $set: { estado: 'cancelada' } }
    );

    const fechaInicio = new Date();
    const fechaFin = new Date();
    fechaFin.setDate(fechaFin.getDate() + nuevoPlan.duracionDias);

    const nuevaSuscripcion = await Subscription.create({
      usuarioId, planId: nuevoPlanId, fechaInicio, fechaFin, estado: 'activa'
    });

    await User.findByIdAndUpdate(usuarioId, { planActual: nuevoPlanId });

    res.json({ mensaje: 'Plan actualizado correctamente', suscripcion: nuevaSuscripcion });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};