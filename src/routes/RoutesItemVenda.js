const express = require('express');
const ItemVendaController = require('../controllers/ItemVendaController');

const router = express.Router();

router.get('/item-venda', ItemVendaController.listAll);
router.post('/item-venda', ItemVendaController.create);
router.put('/item-venda/:id', ItemVendaController.update);
router.delete('/item-venda/:id', ItemVendaController.delete);

module.exports = router;
