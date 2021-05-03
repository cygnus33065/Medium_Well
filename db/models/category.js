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

    const FollowCategoryMapping = {
      through: 'CategoryFollow',
      otherKey: 'userId',
      foreignKey: 'catId'
      }
    

    Category.belongsToMany(models.Story, columnMappingCategory)
    Category.belongsToMany(models.User, FollowCategoryMapping)

  };
  return Category;
};

