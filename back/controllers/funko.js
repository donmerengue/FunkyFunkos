// Hablar con Ryu que nombre le puso al models de funkoos
const Funkos = require("../models").Funkos;
const { Op } = require("sequelize");
const funko = {}

funko.all = (req, res) => {
  Funkos.findAll()
    .then((funkos) => res.status(200).json(funkos))
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

funko.searchFunko = (req, res) => {
  const {search} = req.params
  Funkos.findAll({
    where: {
      [Op.or]: [
        {name: search},
        {serialNumber: search},
        {collection: search},
        {description: search},
      ],
    },
  }).then((funko) => res.status(200).json(funko))
  .catch((err) => {
    res.status(500).json({ message: err.message })
  })
};

funko.singleFunko = (req, res) => {
  const {id} = req.params
  Funkos.findByPk({
    where: {id}
})
  .then((funko) => res.status(200).json(funko))
  .catch((err) => {
    res.status(500).json({ message: err.message })
  })
};

funko.addFunko = (req, res) => {
  const { name, description, serialNumber, price, stock, collection, image } =
    req.body;
  Funkos.create({
    name,
    description,
    serialNumber,
    price,
    stock,
    collection,
    image,
  })
    .then((funko) => res.status(204).json(funko))
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};


funko.putFunko = (req, res) => {
  Funkos.update(
    req.body,
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Funkos.findOne({ where: { id: req.params.id } }).then((funko) =>
        res.status(204).json(funko)
      );
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};


funko.deleteFunko = (req, res) => {
  Funkos.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).json())
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

module.exports = funko