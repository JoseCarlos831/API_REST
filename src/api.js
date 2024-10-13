const express = require('express');
const router = express.Router();

const path = require('path');
const routers = require(path.join(__dirname, '../src/routes/homeRoutes'));

// Definir suas rotas aqui
router.get('/', (req, res) => {
  res.send('Home Page');
});

module.exports = router;
