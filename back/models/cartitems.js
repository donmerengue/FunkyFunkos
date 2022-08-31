const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartItems extends Model {
    static associate(models) {
      // define association here
     
    }
  }
  CartItems.init({
    funko: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'CartItems',
  });
  return CartItems;
};