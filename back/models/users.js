const bcrypt = require("bcrypt");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    hash(password, salt) {
      return bcrypt.hash(password, salt);
    }

    validatePassword(password) {
      return this.hash(password, this.salt).then(
        (newHash) => newHash === this.password
      );
    }

    static associate(models) {
      
    }
  }
  Users.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    fullname: {
      type: DataTypes.STRING,
     /*  validate: {
        isAlpha: {
          args: true,
          msg: "El nombre completo solo puede contener letras"
        } 
      }*/
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    admin: {
      type: DataTypes.STRING,
      
    },
    salt: { type: DataTypes.STRING }
  },
    {
      sequelize,
      modelName: 'Users',
      timestamps: false,
    });

  //Hook para hacer el hash del registro de usuario
  Users.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync();

    user.salt = salt;

    return user.hash(user.password, salt).then((hash) => {
      console.log("HASH", hash);
      user.password = hash;
    });
  });


  // TODO: 30/8 Agregar Hook de beforeUpdate para hashear la password cuando se la cambia (como el beforeCreate)
  // (no funciona simplemente cambiando el beforeCreate por beforeUpdate)

  return Users;
};
