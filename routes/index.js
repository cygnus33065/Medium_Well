var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models')
const { Story, Category } = db
/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll();
  const categories = await Category.findAll();
  res.render('index', { stories, categories, req, title: 'Medium Well Home' });
}));



module.exports = router;
