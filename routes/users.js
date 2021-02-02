var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, userValidator} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User } = db;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res, next) => {
  res.render('signup', {csrfToken : req.csrfToken()});
})

router.post('/signup', csrfProtection, userValidator, errorHandler, asyncHandler(async(req, res) => {
  const {username, email, password, confirmPassword} = req.body;
  const errors = req.errors
  if (!errors){
    const hashedPassword = await bcrypt.hash(password, 8);
    await User.create({
      username,
      email,
      hashedPassword
    });
    req.session.save(() =>{
      res.redirect('/');
    });
  } else {
    res.render('signup', {errors} )
  }
}));


module.exports = router;
