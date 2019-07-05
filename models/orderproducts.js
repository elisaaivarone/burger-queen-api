'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    OrderId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function (models) {
    OrderProducts.belongsTo(models.Products, {foreingKey: 'ProductId'
    })
    OrderProducts.belongsTo(models.Orders, {foreingKey: 'OrderId'
    })
  };
  return OrderProducts;
};