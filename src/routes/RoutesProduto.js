const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = express.Router();

console.log('Produto Routes Loaded');

router.get('/produtos', ProdutoController.listAllProduto);
router.post('/produtos', ProdutoController.create);
router.put('/produtos/:id', ProdutoController.updateProduto);
router.delete('/produtos/:id', ProdutoController.deleteProduto);

module.exports = router;
