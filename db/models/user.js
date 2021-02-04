'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: { 
      allowNull: false, 
      type: DataTypes.STRING,
      unique: {
          args: true,
          msg: 'Username already exists'
        }
      },
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};