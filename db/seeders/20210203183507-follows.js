'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Followers', [
        {userId:1 , followerId: 28,createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, followerId: 3,createdAt: new Date(), updatedAt: new Date()},
        {userId: 28, followerId: 2,createdAt: new Date(), updatedAt: new Date()},
        {userId: 2 , followerId: 4,createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, followerId: 6 ,createdAt: new Date(), updatedAt: new Date()},
        {userId: 28 , followerId: 1,createdAt: new Date(), updatedAt: new Date()},
        {userId: 6, followerId:3 ,createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Followers', null, {});
  }
};
