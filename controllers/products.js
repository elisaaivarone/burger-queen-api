const models = require('../models');
const Products = models.Products;

const getProducts = (req, res) => {
  Products.findAll()
    .then(products => res.send(products)
    )
};

const getProductsById = (req, res) => {
  Products.findByPk(req.params.id)
    .then(Products => {
      Products ? res.send(Products) : res.sendStatus(404)
    })
};

const postProducts = (req, res) => Products.create(req.body)
  .then(products => {
    res.status(201).send(products);
  });

const putProducts = (req, res) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Products
        .findByPk(req.params.id)
        .then(Products => res.send(Products.dataValues))
    })
};

const deleteProducts = (req, res) => {
  Products.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getProducts,
  getProductsById,
  postProducts,
  putProducts,
  deleteProducts
};