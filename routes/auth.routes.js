const express = require('express');
const router = express.Router();

//hna njib lpath mn controllers chghol yrou7 lel controller yjib les infos
const authController = require('../controllers/auth.controller');

//post pour tester esq les infos de utilisateur correcte ou non
router.post('/login', authController.login);

module.exports = router;