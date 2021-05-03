const express = require('express');
const router = express.Router();
const db = require('../db/models')
const { Category, User, CategoryFollow } = db
const {asyncHandler} = require('../utils.js')
const { Sequelize } = require('../db/models');


router.get(`/:id/followed`, asyncHandler(async(req, res, next) => {
    const userId = parseInt(req.params.id, 10);   
    const followed = await CategoryFollow.findAll({
        where: {
            userId,
        }
    })

    return res.json(followed)
}))

router.post(`/:id/followed`, asyncHandler(async(req, res, next) => {

    const userId = parseInt(req.params.id, 10);

}))

// get all
router.get('/', asyncHandler(async(req, res, next) => {
    const categories = await Category.findAll();
    return res.json(categories)
}))

module.exports = router;