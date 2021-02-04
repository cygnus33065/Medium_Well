'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Followers', [
        {userId:1 , followerId: 5,createdAt: new Date(), updatedAt: new Date()},
        {userId: 1, followerId: 3,createdAt: new Date(), updatedAt: new Date()},
        {userId: 4, followerId: 2,createdAt: new Date(), updatedAt: new Date()},
        {userId: 2 , followerId: 4,createdAt: new Date(), updatedAt: new Date()},
        {userId: 2, followerId: 3 ,createdAt: new Date(), updatedAt: new Date()},
        {userId: 2 , followerId: 1,createdAt: new Date(), updatedAt: new Date()},
        {userId: 5, followerId:3 ,createdAt: new Date(), updatedAt: new Date()},
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
