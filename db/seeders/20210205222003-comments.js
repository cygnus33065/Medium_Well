'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('People', [
        {comment: 'This is better than Recursion', userId:2, storyId:3, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'BRRRRRRRR!', userId:2, storyId:3, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'I am rooting for the robot!!!', userId:5, storyId:1, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Great site... You are all hired!!! -Google Recruiter', userId:1, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Go Mayor Pete.', userId:4, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'BOO RobinHood let me buy GME', userId:22, storyId:4, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'BTC for me!!!', userId:28, storyId:4, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Eat the rich!!!!', userId:15, storyId:4, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Thats nothin, we get 3 feet of snow in June', userId:14, storyId:3, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'What a dumb hat', userId:24, storyId:3, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'from South Bend to DC, not sure if that is an upgrade', userId:18, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Did he drive himself there?', userId:11, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Maybe i can get my refund now!!', userId:19, storyId:1, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'First', userId:26, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: `Who knew SkyNet would be trying to get us better prices on stuff we don't really need in the firstplace`, userId:6, storyId:1, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'This if my life meow- Pete', userId:12, storyId:2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Amazong', userId:17, storyId:1, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'Now if he would only do the dishes- His wife', userId:14, storyId:3, createdAt: new Date(), updatedAt: new Date()},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('People', null, {});
  }
};
