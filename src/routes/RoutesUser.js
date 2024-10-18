const express = require('express');
const UsuarioController = require('../controllers/UserController');

const router = express.Router();

router.get('/usuarios', UsuarioController.listarUsuario);
router.post('/usuarios', UsuarioController.createUsuario);
router.post('/login', UsuarioController.login);

module.exports = router;
