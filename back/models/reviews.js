
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reviews extends Model {
    
    static associate(models) {
    }
  }

  Reviews.init({
    content: {
    type:DataTypes.STRING,
    },
    rating: {
    type:DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Reviews',
    timestamps: false,
  });

  return Reviews;
};