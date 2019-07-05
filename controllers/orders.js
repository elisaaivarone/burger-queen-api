const models = require('../models');
const Orders = models.Orders;
const OrderItem = models.OrderProducts;
const Product = models.Products;
const User = models.User;

const getOrders = (req, res) => {
  Orders.findAll({ include: [{ model: OrderItem, include: [Product] }, User] })
    .then(orders => orders ? res.send(orders) : res.sendStatus(404))
};

const getOrdersById = (req, res) => {
  Orders.findByPk(req.params.id, { include: [{ model: OrderItem, include: [Product] }, User] })
    .then(orders => {
      res.send(orders)
    })
};

const postOrders = (req, res) => {
  Orders.create(req.body, { include: [OrderItem] })
    .then(orders => {
      res.status(201).send(orders)
    });
};

const putOrders = (req, res) => {
  Orders.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Orders
        .findByPk(req.params.id)
        .then(orders => res.send(orders))
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