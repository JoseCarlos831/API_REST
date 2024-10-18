const { Model, DataTypes } = require('sequelize');

class Venda extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id_cliente', as: 'cliente' });
    this.hasMany(models.ItemVenda, { foreignKey: 'venda_id_venda', as: 'itemvenda' });
  }

  static init(sequelize) {
    super.init({
      dataVenda: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          len: {
            args: [3, 255],
            msg: 'A data precisa estar entre ',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'venda',
    });
    return this;
  }
}
module.exports = Venda;
