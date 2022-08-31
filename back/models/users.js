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
      // TODO: define association here
    }
  }
  Users.init(
    {
      // TODO: incoporar validaciones (sacar de rama models de Mechi)
      username: DataTypes.STRING,
      fullname: DataTypes.STRING,
      address: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      salt: DataTypes.STRING,
      admin: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

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
