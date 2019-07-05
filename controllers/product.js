const models = require('../models');
const Product = models.Products;

const getProducts = (req, res) => {
  Product.findAll()
    .then(products => res.send(products)
    )
};

const getProductsById = (req, res) => {
  Product.findByPk(req.params.id)
    .then(product => {
      product ? res.send(Product) : res.sendStatus(404)
    })
};

const postProducts = (req, res) => Product.create(req.body)
  .then(product => {
    res.status(201).send(product);
  });

const putProducts = (req, res) => {
  Product.update({ ...req.body }, { where: { id: req.params.id } })
    .then(() => {
      Product
        .findByPk(req.params.id)
        .then(product => res.send(product.dataValues))
    })
};

const deleteProducts = (req, res) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200));
};

module.exports = {
  getProducts,
  getProductsById,
  postProducts,
  putProducts,
  deleteProducts
};