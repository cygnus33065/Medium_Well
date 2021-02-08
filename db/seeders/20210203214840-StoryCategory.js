'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('StoryCategories', [
        {storyId: 1, categoryId: 2, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 1, categoryId: 4, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 2, categoryId: 6, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 2, categoryId: 1, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 3, categoryId: 4, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 3, categoryId: 2, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 4, categoryId: 5, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 4, categoryId: 3, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 4, categoryId: 1, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 1, categoryId: 7, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 2, categoryId: 3, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 5, categoryId: 7, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 6, categoryId: 7, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 7, categoryId: 2, createdAt: new Date(), updatedAt: new Date()},
        {storyId: 8, categoryId: 3, createdAt: new Date(), updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('StoryCategories', null, {});
  }
};
