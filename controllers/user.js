const models = require('../models');
const User = models.Users;


const getUsers = (req, res) => {
  User.findAll()
    .then(users => res.send(users)
    )
};

const getUsersById = (req, res) => {
  User.findByPk(req.params.id)
    .then(user => {
      user ? res.send(user) : res.sendStatus(404)
    })
};

const postUsers = (req, res) => User.create(req.body)
  .then(user => {
    res.status(201).send(user);
  });

const putUsers = (req, res) => {
  User.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      User
        .findByPk(req.params.id)
        .then(user => res.send(user.dataValues))
    })
};

const deleteUsers = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getUsers,
  getUsersById,
  postUsers,
  putUsers,
  deleteUsers
};