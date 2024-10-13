const express = require('express');
const dotenv = require('dotenv');
const produtoRoutes = require('./src/routes/RoutesProduto');
const vendaRoutes = require('./src/routes/RoutesVenda');
const itemVendaRoutes = require('./src/routes/RoutesItemVenda');
const homeRoutes = require('./src/routes/homeRoutes');
const RoutesUser = require('./src/routes/RoutesUser');
const clienteRoutes = require('./src/routes/RoutesCliente');
const registerRoute = require('./src/routes/Register');

// Configurando variáveis de ambiente
dotenv.config();

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // Middleware para aceitar JSON e dados via URL-encoded
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    // Definindo as rotas da aplicação
    this.app.use('/', homeRoutes);
    this.app.use('/api', clienteRoutes);
    this.app.use('/api', produtoRoutes);
    this.app.use('/api', vendaRoutes);
    this.app.use('/api', itemVendaRoutes);
    this.app.use('/api', RoutesUser);
    this.app.use('/register', registerRoute);
  }
}
module.exports = new App().app;
