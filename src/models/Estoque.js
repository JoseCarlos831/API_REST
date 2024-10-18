const { Model, DataTypes } = require('sequelize');

class Estoque extends Model {
  static associate(models) {
    this.belongsTo(models.Produto, { foreignKey: 'produto_id_produto', as: 'produto' });
  }

  static init(sequelize) {
    super.init({
      id_estoque: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantidadeEstoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
      quantidadeMin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
      quantidadeMax: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: {
            msg: 'A quantidade precisa ser um número inteiro',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'estoque',
    });
    return this;
  }
}
module.exports = Estoque;
