import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static async createProduto(dadosProduto) {
    console.log('createProduto foi chamado');
    try {
      const produto = await Produto.create(dadosProduto);
      return produto;
    } catch (error) {
      throw new Error(`Erro ao criar o produto no model: ${error.message}`);
    }
  }

  static associate(models) {
    this.hasOne(models.Estoque, { foreignKey: 'produto_id_produto' });
    this.hasMany(models.ItemVenda, { foreignKey: 'produto_id_produto' });
  }

  static init(sequelize) {
    super.init({
      id_produto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nomeProduto: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome do produto precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'A descriçao precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      categoria: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 100],
            msg: 'A Categoria precisa ter entre 3 e 100 caracteres.',
          },
        },
      },
      preco: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: {
          isFloat: {
            msg: 'Preço precisa ser um número inteiro ou de ponto flutuante',
          },
        },
      },
      codigo: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        validate: {
          isInt: {
            msg: 'Codigo precisa ser um número inteiro',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'produto',
    });
    return this;
  }
}
