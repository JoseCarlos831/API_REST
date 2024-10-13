const Produto = require('../models/Produto').default;

class ProdutoController {
  async create(req, res) {
    const {
      nomeProduto, descricao, categoria, preco, codigo,
    } = req.body;
    try {
      const produto = Produto.create({
        nomeProduto,
        descricao,
        categoria,
        preco,
        codigo,
      });
      return res.status(201).json(produto);
    } catch (error) {
      console.error(error); // Verifique o erro no console
      return res.status(500).json({ error: 'Erro ao criar produto no controller ' });
    }
  }

  async listAllProduto(req, res) {
    try {
      const produto = await Produto.findAll();
      return res.status(200).json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao listar os Produtos' });
    }
  }

  // Atualizar um produto
  async updateProduto(req, res) {
    const { id } = req.params;
    const {
      nomeProduto, descricao, categoria, preco,
    } = req.body;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.update({
        nomeProduto, descricao, categoria, preco,
      });
      return res.json(produto);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
  }

  // Deletar um produto
  async deleteProduto(req, res) {
    const { id } = req.params;
    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
      }

      await produto.destroy();
      return res.json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao deletar produto' });
    }
  }
}

module.exports = new ProdutoController();
