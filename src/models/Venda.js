const { Model, DataTypes } = require('sequelize');

class Venda extends Model {
  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id_cliente', as: 'cliente' });
    this.hasMany(models.ItemVenda, { foreignKey: 'venda_id_venda', as: 'itemvenda' });
  }

  static init(sequelize) {
    super.init({
      id_venda: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id_venda',
      },
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
      clienteidcliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'cliente_id_cliente',
      },
    }, {
      sequelize,
      tableName: 'venda',
      timestamps: true,
    });
    return this;
  }
}
module.exports = Venda;
