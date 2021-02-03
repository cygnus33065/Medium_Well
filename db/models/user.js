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
    const columnMappingComment = {
      through: "Comment",
      otherKey: "storyId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.Story, columnMappingComment)

    const columnMappingLikedStory = {
      through: "UserLikedStory",
      otherKey: "storyId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.UserLikedStories, columnMappingLikedStory)

    const columnMappingLikedComment = {
      through: "UserLikedComment",
      otherKey: "commentId",
      foreignKey: "userId"
    }
    User.belongsToMany(models.UserLikedComment, columnMappingLikedComment)

    const columnMappingFollower = {
      through: "Follower",
      targetKey: "userId",
      foreignKey: "followerId"
    }
    User.belongsToMany(models.Follower, columnMappingFollower)
  };

  return User;
};