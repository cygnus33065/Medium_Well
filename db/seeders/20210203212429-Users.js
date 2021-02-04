'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Users', [
        {username: 'testuser1', email: 'testuser1@test.com', hashedPassword: '$2a$08$jZUzuwziErboQ01Q9vkUAeScxBBmlkpiInAR1YDdijtE19nQieMXO', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser2', email: 'testuser2@test.com', hashedPassword: '$2a$08$r.DL5psciYyLUPse8i3jvenazUijlOLlKmcmuGjsud5MWJjXTTg1K', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser3', email: 'testuser3@test.com', hashedPassword: '$2a$08$OxSmruZQNufrCiNa0GZxS.iwAakNz6wv6iEhvtEqvcZnkMdll29DW', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser4', email: 'testuser4@test.com', hashedPassword: '$2a$08$cajCsjTbf1kwanbdsavsEuvWBbGnaSYORBa/Syd.ZsUbfY22BRCya', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser5', email: 'testuser5@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
