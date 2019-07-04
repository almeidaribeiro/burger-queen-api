'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    table: DataTypes.STRING,
    status: DataTypes.STRING,
    customerId: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User, {foreignKey:'customerId'});
    Order.hasMany(models.OrderProducts, {foreignKey:'orderId'});
  };

  // Order.create({status: 'PENDING', uid: 1});
  // Order.create({status: 'DELIVERED', uid: 2});
  
  return Order;
};