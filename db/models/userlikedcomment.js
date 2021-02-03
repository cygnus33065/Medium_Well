'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLikedComment = sequelize.define('UserLikedComment', {
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  UserLikedComment.associate = function(models) {
    // associations can be defined here
  };
  return UserLikedComment;
};