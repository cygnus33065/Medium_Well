var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, checkUnique} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { Sequelize } = require('../db/models');
const { User, Follower, Category, Story, StoryCategory, UserLikedStory } = db;



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

router.get('/followers', asyncHandler(async(req, res, next) =>{
    const users = await Follower.findAll()
    res.json(users)
}))

//  DOES NOT WORK in story.js but works in test.js
router.get('/recent', asyncHandler(async(req, res, next) => {
    const story = await Story.findAll({
        order: [["date", "DESC"]]
    })
    res.json(story)
}))



module.exports = router;