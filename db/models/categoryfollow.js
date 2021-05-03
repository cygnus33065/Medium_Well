'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryFollow = sequelize.define('CategoryFollow', {
    userId: DataTypes.INTEGER,
    catId: DataTypes.INTEGER
  }, {});
  CategoryFollow.associate = function(models) {
    
  };
  return CategoryFollow;
};