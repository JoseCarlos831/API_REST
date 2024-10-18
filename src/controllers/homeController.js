const Produto = require('../models/Produto');

class HomeCrontroller {
  async index(req, res) {
    const novoproduto = await Produto.create({
      nomeProduto: 'Produto Teste',
      descricao: 'Este é um produto de teste',
      categoria: 'Eletrônicos',
      preco: 100.00,
      codigo: 12345,
    });
    res.json(novoproduto);
  }
}

module.exports = new HomeCrontroller();
