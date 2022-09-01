const { sequelize } = require("../models");

const cart = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems;

cart.getItemCart = async (req, res) => {
  try {
    const id = req.params.id;
    const funko = await Funkos.findOne({ where: { id } });

    return res.status(200).json(funko);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

cart.addItemCart = async (req, res) => {
  try {
    const id = req.params.id;
    const funko = await Funkos.findOne({ where: { id } });
    const addItem = await CartItems.create({ funko });
    res.json(addItem);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

cart.deleteCart = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }

  cart.addItemOrder = async (req, res) => {
    try {
      //fijarme que manda el front y meter eso en el create

      OrderItems.create();
    } catch {}
  };
};

module.exports = cart;
