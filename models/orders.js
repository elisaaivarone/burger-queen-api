'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    status: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {});
  Orders.associate = function (models) {
    Orders.belongsTo(models.User, {
      foreingKey: 'UserId'
    });
    Orders.hasMany(models.OrderProducts, {
      foreignKey: 'OrderId'
    })
  };
  return Orders;
};