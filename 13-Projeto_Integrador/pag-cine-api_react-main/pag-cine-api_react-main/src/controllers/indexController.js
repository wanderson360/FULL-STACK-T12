const { Filme } = require('../models')

module.exports = {
  index(req, res) {
    res.send('Hello')
  },
  async listaFilmes(req, res, next) {
    const lista = await Filme.findAll();
    console.log(lista)
    res.send(lista)
  },
  async filme(req, res, next) {
    const { id } = req.params
    const filmeId = await Filme.findOne({
      where: {
        id
      }
    });
    res.send(filmeId)
  },
  async ultimos(req, res, next) {
    const num = parseInt(req.params.num)
    console.log(num)
    const ultimosFilmes = await Filme.findAll({
      limit: num,
      order: [ [ 'id', 'DESC' ]]
    });
    res.send(ultimosFilmes)
  },
}