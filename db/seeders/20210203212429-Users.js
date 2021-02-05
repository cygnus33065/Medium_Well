'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Users', [
        {username: 'demo', email: 'demo@demouser.com', hashedPassword: '$2a$08$jZUzuwziErboQ01Q9vkUAeScxBBmlkpiInAR1YDdijtE19nQieMXO', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser1', email: 'testuser1@test.com', hashedPassword: '$2a$08$jZUzuwziErboQ01Q9vkUAeScxBBmlkpiInAR1YDdijtE19nQieMXO', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser2', email: 'testuser2@test.com', hashedPassword: '$2a$08$r.DL5psciYyLUPse8i3jvenazUijlOLlKmcmuGjsud5MWJjXTTg1K', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser3', email: 'testuser3@test.com', hashedPassword: '$2a$08$OxSmruZQNufrCiNa0GZxS.iwAakNz6wv6iEhvtEqvcZnkMdll29DW', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser4', email: 'testuser4@test.com', hashedPassword: '$2a$08$cajCsjTbf1kwanbdsavsEuvWBbGnaSYORBa/Syd.ZsUbfY22BRCya', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser5', email: 'testuser5@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser6', email: 'testuser6@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser7', email: 'testuser7@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser8', email: 'testuser8@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser9', email: 'testuser9@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser10', email: 'testuser10@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser11', email: 'testuser11@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser12', email: 'testuser12@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser13', email: 'testuser13@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser14', email: 'testuser14@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser15', email: 'testuser15@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser16', email: 'testuser16@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser17', email: 'testuser17@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser18', email: 'testuser18@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser19', email: 'testuser19@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser20', email: 'testuser20@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser21', email: 'testuser21@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser22', email: 'testuser22@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser23', email: 'testuser23@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser24', email: 'testuser24@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser25', email: 'testuser25@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser26', email: 'testuser26@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser27', email: 'testuser27@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser28', email: 'testuser28@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser29', email: 'testuser29@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
        {username: 'testuser30', email: 'testuser30@test.com', hashedPassword: '$2a$08$VZjk7HU4gGX2Xv/vx6DnaOzW988Og3ODfFuHF1A2KPNDcMg6ditHe', createdAt: new Date(), updatedAt: new Date()},
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
