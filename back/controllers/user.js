const { validateAuth } = require("../config/authentication");
const { generateToken } = require("../config/tokens");

const Users = require("../models").Users;
const user = {}


user.register = (req, res) => {
  const { email, username, fullname, address, password } = req.body;
  Users.findOrCreate({
    where: { email },
    defaults: { email, username, fullname, address, password }
  })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      console.log("ERORRORRRRRRRR", err)
      res.status(500).json({ message: err.message })
    })
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
          username: user.username,
          fullname: user.fullname,
          isAdmin: user.admin,
        };
        const token = generateToken(payload);
        res.cookie("token", token);
        res.json(payload); // envio informacion del usuario
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  });
};


user.me = (req, res) => {
  res.json(req.user);
};


user.logout = (req, res) => {
  res.clearCookie("token");
  res.status(204).json();//------->>>>
};

user.deleteUser = (req, res) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(() => res.status(204).json()) //------->>>>
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

user.all = (req, res) => {
  Users.findAll()
    .then((users) => res.status(200).json(users))
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

user.put = (req, res) => {
  Users.update(
    req.body,
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Users.findOne({ where: { id: req.params.id } })
      .then((newName) =>
        res.json(newName)
      );
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

user.putAdminFalse = (req, res) => {
  Users.update(
    { admin: false },
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Users.findOne({ where: { id: req.params.id } })
      .then((upDateAdm) =>
        res.json(upDateAdm)
      );
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

user.putAdminTrue = (req, res) => {
  Users.update(
    { admin: true },
    { where: { id: req.params.id }, returning: true }
  )
    .then(() => {
      Users.findOne({ where: { id: req.params.id } })
        .then((upDateAdm) =>
          res.json(upDateAdm)
        );
    })
    .catch((err) => {
      res.status(500).json({ message: err.message })
    })
};

module.exports = user

