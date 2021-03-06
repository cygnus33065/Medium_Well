var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, checkUnique} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const db = require('../db/models');
const { Sequelize } = require('../db/models');
const { User, Follower, Category, Story, StoryCategory, UserLikedStory, Comment } = db;
const { route } = require('./index.js');
// const { json } = require('sequelize/types');





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


router.get('/story/:id', asyncHandler(async(req,res,next) =>{
    const id = parseInt(req.params.id, 10)
    const story = await Story.findByPk(id);
    const categories = await Category.findAll()
    res.render('story', {story, categories})
}))

router.post('/story/:id', asyncHandler(async(req,res,next)=> {
    const storyId = parseInt(req.perams.id, 10);
    const username = locals.username
    const user = await User.findOne( {where: {username}})
    const {comment} = req.body;

    const newComment = await Comment.create({
      comment,
      userId: user.id,
      storyId
    })
    res.json(newComment)
}))


router.put('/story/:id', asyncHandler(async(req,res,next)=> {
    const storyId = parseInt(req.perams.id, 10);
    const username = locals.username
    const user = await User.findOne( {where: {username}})
    const isLiked = await UserLikedStory.findOne({where: {storyId, userId: user.id}})
    // write query to get total likes.
    if(!isLiked){
        await UserLikedStory.create({
            userId: user.id,
            storyId
        })
        return await UserLikedStory.count({where: {storyid}})
    } else {
        await UserLikedStory.destroy({ where: {userId: user.id, storyId}})
        return await UserLikedStory.count({where: {storyId}})
    }
}))
module.exports = router;
