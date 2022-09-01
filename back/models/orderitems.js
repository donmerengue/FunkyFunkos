const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItems extends Model {
 
    static associate(models) {
    
    }
  }

  OrderItems.init({
    quantity: {
      type:DataTypes.STRING,
     /*  defaultValue: 1,
      validate:{
        min: 1
      } */
    }
  }, {
    sequelize,
    modelName: 'OrderItems',
    timestamps: false,
  });

  return OrderItems;
};