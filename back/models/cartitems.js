const { Model } = require("sequelize");
// const OrderItems = require("../models").OrderItems;

module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate(models) {
      // define association here

      CartItems.belongsToMany(models.Users, {
        through: "UserCart",
      });
    }
  }
  CartItems.init(
    {
      funko: { type: DataTypes.JSONB },
      quantity: { type: DataTypes.INTEGER },
      total: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "CartItems",
    }
  );
  CartItems.beforeBulkDestroy(async () =>{
    const backup = await CartItems.findAll()
    const cargandoOrderItems = await models.OrderItems.bulkcreate(backup)

  })
  return CartItems;
};
