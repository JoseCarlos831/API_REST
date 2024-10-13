const express = require('express');
const ClienteController = require('../controllers/ClienteController');

const router = express.Router();

router.get('/clientes', ClienteController.listAll);
router.post('/clientes', ClienteController.create);
router.put('/clientes/:id', ClienteController.update);
router.delete('/clientes/:id', ClienteController.delete);

module.exports = router;
