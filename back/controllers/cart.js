const { sequelize } = require("../models");

const cart = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems;
const Users = require("../models").Users;

cart.getItemCart = async (req, res) => {
  try {
    console.log('le estas pegando a la ruta de getItemCart')
    const userId = req.params.id;
    console.log(userId);

    const user = await Users.findByPk(userId, {
      include: "CartItems",
    });

    console.log("user CartItems", user.CartItems);
    res.json(user.CartItems);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

cart.addItemCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const funkoId = req.params.id;
    const { quantity, total } = req.query;

    // Obtener data del usuario
    const user = await Users.findByPk(userId);
    console.log(user);

    // Obtener data del funko
    const funko = await Funkos.findOne({ where: { id: funkoId } });

    // Actualizar data del funko en CartItems
    const updateFunko = await CartItems.findOrCreate({
      where: { funko },
      defaults: { quantity, total },
    });
    const cartItemId = updateFunko[0].dataValues.id;

    // Actualizar tabla intermedia
    const updatedUserCart = await user.addCartItems(cartItemId);

    console.log("Updated UserCart", updatedUserCart);

    //addFavorite(favoriteId))

    // Actualizar tabla intermedia UserCart

    console.log("Funko cargado en CartItems", updateFunko)

    res.json(updateFunko);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};

cart.deleteCart = async (req, res) => {
  try {
    const deletecart = await OrderItems.bulkdestroy()
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
