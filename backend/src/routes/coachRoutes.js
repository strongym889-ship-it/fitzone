const express = require('express');
const router = express.Router();
const { crearCoach, obtenerCoaches } = require('../controllers/coachController');

router.post('/', crearCoach);
router.get('/', obtenerCoaches);

module.exports = router;