var express = require('express');
var router = express.Router();
const { asyncHandler } = require('../utils')
const db = require('../db/models')
const { Story } = db
/* GET home page. */
router.get('/', asyncHandler(async(req, res, next) => {
  const stories = await Story.findAll()
  res.render('index', { stories, req, title: 'Medium Well Home' });
}));



module.exports = router;
