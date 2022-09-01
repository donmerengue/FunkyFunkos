const { sequelize } = require("../models");

const cart = {};

const CartItems = require("../models").CartItems;
const Funkos = require("../models").Funkos;
const OrderItems = require("../models").OrderItems;
const Users = require("../models").Users;

// TODO: asegurar ruta con validateCookie,
cart.getItemCart = async (req, res) => {
  try {
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

// RUTAS DE FAVORITOS en http://localhost:3001/api/me/favorites
//Agregar favoritos
/* router.put("/me/favorites", validateCookie, (req, res) => {
  // console.log("REQ.COOKIES desde /me/favorites", req.cookies)
  console.log("llega a .PUT de /me/favorites");
  // console.log("REQ.QUERY", req.query)
  // console.log("cookie user", req.user);
  const userId = req.user.id;
  const { mediaId, mediaName, mediaType } = req.query;

  User.findByPk(userId).then((user) => {
    Favorite.findOrCreate({
      where: { mediaId },
      defaults: { mediaId, mediaName, mediaType },
    })
      .then((favorite) => {
        const favoriteId = favorite[0].dataValues.id;
        return [user, favoriteId];
      })
      .then(([user, favoriteId]) => user.addFavorite(favoriteId))
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.status(500).send(err);
      });
  });
}); */

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
