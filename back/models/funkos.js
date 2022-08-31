'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funkos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funkos.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    serialNumber: DataTypes.STRING,
    price: DataTypes.STRING,
    stock: DataTypes.STRING,
    rating: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Funkos',
  });
  return Funkos;
};