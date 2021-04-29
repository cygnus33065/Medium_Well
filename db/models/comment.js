'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    storyId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
      Comment.belongsTo(models.User, {foreignKey: "userId"})
  //   const columnMapping = {through: 'UserLikedComment',
  //   otherKey: 'userId',
  //   foreignKey: 'commentId'}
  //   Comment.belongsToMany(models.User, columnMapping);
  };

  return Comment;
};
