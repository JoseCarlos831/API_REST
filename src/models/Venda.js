import Sequelize, { Model } from 'sequelize';

export default class Venda extends Model {
  static init(sequelize) {
    super.init({
      dataVenda: {
        type: Sequelize.DATE,
        defaultValue: '',
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

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'cliente_id_cliente' });
    this.hasMany(models.ItemVenda, { foreignKey: 'venda_id_venda' });
  }
}