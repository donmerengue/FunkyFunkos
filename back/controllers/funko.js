// Hablar con Ryu que nombre le puso al models de funkoos
const Funkos = require("../models").Funkos;
const { Op } = require("sequelize");
const funko = {}

funko.all = (req, res) => {
  Funkos.findAll()
    .then((Funkos) => res.status(200).json(Funkos))
    .catch((err) => console.log(err));
};

funko.singleFunko = (req, res) => {
  const {search} = req.params
  Funkos.findAll({
    where: {
      [Op.or]: [
        {name:search },
        { description:search },
      ],
    },
  }).then((funko) => res.status(200).json(funko))
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
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
    .catch((err) => console.log(err));
};


funko.deleteFunko = (req, res) => {
  Funkos.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
};

module.exports = funko