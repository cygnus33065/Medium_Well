'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    preview: DataTypes.STRING,
    story: DataTypes.TEXT,
    imgLink: DataTypes.STRING
  }, {});
  // Story.associate = function(models) {
  //   const columnMappingUser = {
  //     through: 'UserLikedStory',
  //     otherKey: 'userId',
  //     foreignKey: 'storyId'
  //   }
  //   Story.belongsToMany(models.User, columnMappingUser);

  //   const columnMappingComment = {
  //     through: 'Comment',
  //     otherKey: 'userId',
  //     foreignKey: 'storyId'
  //   }
  //   Story.belongsToMany(models.User, columnMappingComment)
    
  //   const columnMappingCategory = {
  //     through: 'StoryCategory',
  //     otherKey: 'categoryId',
  //     foreignKey: 'storyId'
  //   }
  //   Story.belongsToMany(models.Category, columnMappingCategory)
  // };
  return Story;
};
