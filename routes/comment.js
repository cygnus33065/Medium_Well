const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { Story, Category, Comment, UserLikedComment, User } = db
const {asyncHandler} = require('../utils.js')
const { Sequelize } = require('../db/models');

router.put('/:id', asyncHandler (async(req, res) =>{
    const commentId = parseInt(req.params.id, 10)
    const username = locals.username
    const user = await User.findOne( { where: { username } } )
    const isLiked = await UserLikedComment.findOne({ where: {commentId, userId: user.id}})
    if(!isLiked){
        await UserLikedComment.create({
            userId: user.id,
            commentId
        })
        return await UserLikedComment.count({where: {commentId}})
    } else {
        await UserLikedComment.destroy({ where: { userId: user.id, commentId } })
        return await UserLikedComment.count({where: commentId})
    }
}))

module.exports = router;