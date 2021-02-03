'use strict';
module.exports = (sequelize, DataTypes) => {
  const StoryCategory = sequelize.define('StoryCategory', {
    storyId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  StoryCategory.associate = function(models) {
    // associations can be defined here
  };
  return StoryCategory;
};