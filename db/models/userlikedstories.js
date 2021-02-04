'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLikedStories = sequelize.define('UserLikedStories', {
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  UserLikedStories.associate = function(models) {
    // associations can be defined here
  };
  return UserLikedStories;
};