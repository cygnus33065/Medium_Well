'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    const columnMappingCategory = {
      through: 'StoryCategory',
      otherKey: 'storyId',
      foreignKey: 'categoryId'
    }
    Category.belongsToMany(models.Story, columnMappingCategory)
  };
  return Category;
};
