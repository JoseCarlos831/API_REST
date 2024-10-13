const express = require('express');
const EstoqueController = require('../controllers/EstoqueController');

const router = express.Router();

router.get('/estoque', EstoqueController.listAll);
router.post('/estoque/entrada', EstoqueController.registrarEntrada);
router.post('/estoque/saida', EstoqueController.registrarSaida);

module.exports = router;
