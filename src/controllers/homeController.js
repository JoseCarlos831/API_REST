class HomeCrontroller {
  index(req, res) {
    res.json({
      LOCALHOST_funcionando: true,
    });
  }
}

module.exports = new HomeCrontroller();
