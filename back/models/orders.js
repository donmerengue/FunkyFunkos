const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    
    static associate(models) {
    }
  }

  Orders.init({
    paymentStatus: {
      type:DataTypes.STRING,
    },
    shipmentStatus:{
      type: DataTypes.STRING, 
    },
    total: {
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Orders',
    timestamps: false,
  });

  return Orders;
};