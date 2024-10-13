import Sequelize, { Model } from 'sequelize';

export default class Cliente extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      cpf: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 14],
            msg: 'cpf precisa ter entre 3 e 14 caracteres.',
          },
        },
      },
      endereco: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'endereco precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      telefone: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'telefone precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'cliente',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Venda, { foreignKey: 'cliente_id_cliente' });
  }
}
