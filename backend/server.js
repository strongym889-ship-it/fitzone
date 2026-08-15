require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
connectDB();

app.use(express.json());

app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/plans', require('./src/routes/planRoutes'));
app.use('/api/coaches', require('./src/routes/coachRoutes'));
app.use('/api/groups', require('./src/routes/groupRoutes'));
app.use('/api/payments', require('./src/routes/paymentRoutes'));
app.use('/api/subscriptions', require('./src/routes/subscriptionRoutes'));
app.use('/api/notifications', require('./src/routes/notificationRoutes'));
app.use('/api/physical-conditions', require('./src/routes/physicalConditionRoutes'));
app.use('/api/physical-measurements', require('./src/routes/physicalMeasurementRoutes'));
app.use('/api/sleep-quality', require('./src/routes/sleepQualityRoutes'));
app.use('/api/motivation', require('./src/routes/motivationRoutes'));
app.use('/api/training-frequency', require('./src/routes/trainingFrequencyRoutes'));
app.use('/api/training-parameters', require('./src/routes/trainingParameterRoutes'));
app.use('/api/training-periods', require('./src/routes/trainingPeriodRoutes'));
app.use('/api/dietary-control', require('./src/routes/dietaryControlRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));