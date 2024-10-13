const express = require('express');
const VendaController = require('../controllers/VendaController');

const router = express.Router();

router.get('/vendas', VendaController.listAll);
router.post('/vendas', VendaController.create);
router.put('/vendas/:id', VendaController.update);
router.delete('/vendas/:id', VendaController.delete);

module.exports = router;
