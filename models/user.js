'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    //name: DataTypes.STRING,
    email: DataTypes.STRING,
    // passaword: DataTypes.STRING,
    // type: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Order, {
      foreignKey: 'customerId'
    });
  };

  //User.create({email:"bruna@gmail.com"})
  //User.create({email:"yuiti@gmail.com"})
  
  return User;
};