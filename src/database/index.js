const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');
const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Venda = require('../models/Venda');
const Estoque = require('../models/Estoque');
const ItemVenda = require('../models/ItemVenda');

const models = [Produto, Cliente, Venda, Estoque, ItemVenda];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => {
  if (model.associate) {
    model.associate(connection.models);
  }
});

/* models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models)); */

module.exports = connection;
