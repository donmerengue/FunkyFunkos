const { validateAuth } = require("../config/authentication");
const { generateToken } = require("../config/tokens");

const Users = require("../models").Users;
const user = {}


//registro
user.register = (req, res) => {
  const { email } = req.body;
  Users.findOrCreate({
    where: { email },
    defaults: req.body 
  })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      console.log(err)
      res.status(404).json(err)});
};



user.login = (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user
      .validatePassword(password)

      .then((isValid) => {
        if (!isValid) return res.sendStatus(401);

        const payload = {
          email: user.email,
          // TODO: faltaria username aca -> username: user.username
          fullname: user.fullname,
          isAdmin: user.admin,
        };
        const token = generateToken(payload);

        res.cookie("token", token);
        console.log(token);
        console.log("res.cookie en user.login del back");

        res.json(payload); // envio informacion del usuario
      });
  });
};


user.me = (req, res) => {
  res.json(req.user);
};


user.logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};


user.delet = (req, res) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch((err) => console.log(err));
};


user.all = (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).json(users))
    .catch((err) => console.log(err));
};



user.put = (req, res) => {
  Users.update(
    req.body,
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Users.findOne({ where: { id: req.params.id } }).then((newName) =>
        res.json(newName)
      );
    })
    .catch((err) => console.log(err));
};


user.putAdmin = (req, res) => {
  Users.update(
    { admin: true },
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Users.findOne({ where: { id: req.params.id } }).then((newName) =>
        res.json(newName)
      );
    })
    .catch((err) => console.log(err));
};


module.exports = user

