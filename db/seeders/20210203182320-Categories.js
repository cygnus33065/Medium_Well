'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Categories', [
        {name:'entertainment', createdAt: new Date(), updatedAt: new Date()},
        {name:'television_series', createdAt: new Date(), updatedAt: new Date()},
        {name:'film', createdAt: new Date(), updatedAt: new Date()},
        {name:'characters', createdAt: new Date(), updatedAt: new Date()},
        {name:'software', createdAt: new Date(), updatedAt: new Date()},
        {name:'internet', createdAt: new Date(), updatedAt: new Date()},
        {name:'food_drink', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Categories', null, {});
  }
};
