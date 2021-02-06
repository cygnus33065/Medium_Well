const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { Story, Category, User, Comment } = db
const {asyncHandler} = require('../utils.js')
const { Sequelize } = require('../db/models');


//  Get random story < - works
router.get('/random', asyncHandler(async(req, res, next) => {
    const story = await Story.findAll({
        order: [
            Sequelize.fn( 'RANDOM' ),
          ]
    })
    res.json(story)
}));


// Trending Stories - best way to implement? .count() or maybe .findAndCountAll()
router.get('/trending', asyncHandler( async (req, res, next) => {
   // count number of times a storyID appears on the UserLikedStories table
   // find the top X most frequent storyID's
   // query the Stories table for the id's from the previous query. 
    const story = await Story.count({
        where: {
            author: "Olivia Young"
        }
    })
    res.json(story)
}));

// all stories - brandon and john wrote this one
router.get('/', asyncHandler(async(req, res, next) =>{
    const stories = await Story.findAll()
    res.json(stories)
}));

// // one story 
router.get('/:id', asyncHandler(async(req, res, next) =>{
    const id = parseInt(req.params.id, 10)
    const story = await Story.findByPk(id)
    res.json(story);
}))

// Get each category
router.get('/categories/:id', asyncHandler(async(req, res, next) => {
    const id = parseInt(req.params.id, 10)
    const stories = await Category.findByPk(id)
    res.json(stories)
}));

// Get all the stories from each category
router.get('/categories/:id/stories', asyncHandler(async(req, res, next) =>{
    const id = parseInt(req.params.id, 10)
    const stories = await Category.findByPk(id, {
        include: {model: Story}
    }) 
    console.log(stories.Stories)
    res.render("category", {stories: stories.Stories})
  }))

  // Today's Articles - < - DOES NOT WORK /story/recent. only /test/recent
router.get('/recent', asyncHandler(async(req, res, next) => {
    const story = await Story.findAll({
        order: [["date", "DESC"]]
    })
    res.json(story)
}))

router.put('/:id', asyncHandler(async(req,res,next)=> {
    const storyId = parseInt(req.params.id, 10);
    const username = locals.username
    const user = await User.findOne( {where: {username}})
    const isLiked = await UserLikedStory.findOne({where: {storyId, userId: user.id}})
    if(!isLiked){
        await UserLikedStory.create({
            userId: user.id,
            storyId
        })
        return await UserLikedStory.count({where: {storyId}})
    } else {
        await UserLikedStory.destroy({ where: {userId: user.id, storyId}})
        return await UserLikedStory.count({where: {storyId}})
    }
}))

router.post('/:id', asyncHandler(async(req,res,next)=> {
    const storyId = parseInt(req.params.id, 10);
    const username = 'demo'
    const user = await User.findOne( {where: {username}})
    const {comment} = req.body;

    const newComment = await Comment.create({
      comment,
      userId: user.id,
      storyId
    })
    return await Comment.findAll({
        where: {
            storyId
        },
        includes: {model: User}
    });
}));

module.exports = router;