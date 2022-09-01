const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Collections extends Model {
    static associate(models) {
      
    }
  }
  Collections.init({
    quantity: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Collections',
  });
  return Collections;
};