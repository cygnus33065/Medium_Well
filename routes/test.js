var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, checkUnique} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { Sequelize } = require('../db/models');
const { User, Follower, Category, Story, StoryCategory } = db;



router.get('/users/:id', asyncHandler(async(req, res, next) =>{
    const id = parseInt(req.params.id, 10)
    const users = await User.findByPk(id)
    res.json(users)
}))

router.get('/categories', asyncHandler(async(req, res, next) =>{
    const users = await Category.findAll()
    res.json(users)
}))

router.get('/storycategories', asyncHandler(async(req, res, next) =>{
    const users = await StoryCategory.findAll()
    res.json(users)
}))

// router.get('/stories', asyncHandler(async(req, res, next) =>{
//     const users = await Story.findAll()
//     res.json(users)
// }))

router.get('/followers', asyncHandler(async(req, res, next) =>{
    const users = await Follower.findAll()
    res.json(users)
}))

// STORY ROUTES

// all stories 
router.get('/stories', asyncHandler(async(req, res, next) =>{
    const users = await Story.findAll()
    res.json(users)
}));

// // one story 
router.get('/stories/:id', asyncHandler(async(req, res, next) =>{
    const id = parseInt(req.params.id, 10)
    const story = await Story.findByPk(id)
    res.json(story);
}))
// // Today's Articles - kind of hard to tell if the ASC or DESC works
router.get('/recent', asyncHandler(async(req, res, next) => {
    const story = await Story.findAll({
        order: [["date", "DESC"]]
    })
    res.json(story)
}))
// Random Story - can't tell if this works or not 
router.get('/random', asyncHandler(async(req, res, next) => {
    const story = Story.findAll({
        order: [
            Sequelize.fn( 'RANDOM' ),
          ]
    })
    res.json(story)
}));
// Trending Stories - best way to implement? .count() or maybe .findAndCountAll()
// router.get('/trending', asyncHandler(async(req, res, next) => {
//     const likedStories = Story.findAll({
//         include: [{model: UserLikedStory}],
//         order: [
//             ['models.UserLikedStory', 'ASC']
//         ]
//     })
//     res.json(likedStories)
// }))




module.exports = router;