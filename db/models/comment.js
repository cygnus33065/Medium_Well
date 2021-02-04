'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    const columnMapping = {through: 'UserLikedComment',
    // This is the model name referencing thejoin table.
    otherKey: 'userId',
    foreignKey: 'commentId'}
    Comment.belongsToMany(models.User, columnMapping);
  };

  return Comment;
};
