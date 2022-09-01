
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Funkos extends Model {
    static associate(models) {
    }
  }
  Funkos.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    serialNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    collection: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    /*   validate: {
        min: 0
      } */
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    //TODO Agregar hook para calcular rating promedio
    rating: {
      type: DataTypes.STRING,
      /* allowNull: false,
      validate: {
        min: 0,
        max: 5,
      }   */
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Funkos',
    timestamps: false,
  });
  return Funkos;
};