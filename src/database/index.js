const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Venda = require('../models/Venda');
const Estoque = require('../models/Estoque');
const ItemVenda = require('../models/ItemVenda');

const models = [Produto, Cliente, Venda, Estoque, ItemVenda];

const sequelize = new Sequelize(databaseConfig);

models.forEach((model) => model.init(sequelize));
models.forEach((model) => model.associate && model.associate(sequelize.models));

/* models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models)); */

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar banco de dados:', err);
  });

module.exports = sequelize;
