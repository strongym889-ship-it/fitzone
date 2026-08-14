const express = require('express');
const router = express.Router();
const { crearPlan, obtenerPlanes } = require('../controllers/planController');

router.post('/', crearPlan);
router.get('/', obtenerPlanes);

module.exports = router;