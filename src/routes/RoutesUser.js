const express = require('express');
const UsuarioController = require('../controllers/UserController');

const router = express.Router();

router.get('/usuarios', UsuarioController.listAll);
router.post('/usuarios', UsuarioController.create);
router.post('/login', UsuarioController.login);

module.exports = router;
