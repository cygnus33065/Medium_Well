'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('CategoryFollows', [{
        userId: 1,
        catId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      userId: 1,
      catId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        userId: 1,
        catId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        catId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        catId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('CategoryFollows', null, {});

  }
};
