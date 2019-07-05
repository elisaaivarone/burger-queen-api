const models = require('../models');
const Orders = models.Orders;
const OrderItem = models.OrdersProducts;
const Product = models.Products;
const User = models.Users;

const getOrders = (req, res) => {
  Orders.findAll({ include: [{ model: OrderItem, include: [Product] }, User] })
    .then(order => order ? res.send(order) : res.sendStatus(404))
};

const getOrdersById = (req, res) => {
  Orders.findByPk(req.params.id, { include: [{ model: OrderItem, include: [Product] }, User] })
    .then(order => {
      res.send(order)
    })
};

const postOrders = (req, res) => {
  Orders.create(req.body, { include: [OrderItem] })
    .then(order => {
      res.status(201).send(order)
    });
};

const putOrders = (req, res) => {
  Orders.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Orders
        .findByPk(req.params.id)
        .then(order => res.send(order))
    });
};

const deleteOrders = (req, res) => {
  OrderItem.destroy({ where: { id: req.params.id } })
  Orders.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getOrders,
  getOrdersById,
  postOrders,
  putOrders,
  deleteOrders
};