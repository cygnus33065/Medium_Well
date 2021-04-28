'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLikedStory = sequelize.define('UserLikedStory', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  UserLikedStory.associate = function(models) {
    // UserLikedStory.belongsTo(models.Story, {foreignKey: "storyId"})
  };
  return UserLikedStory;
};