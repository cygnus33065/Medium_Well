var express = require('express');
const {asyncHandler, csrfProtection, errorHandler, userValidator} = require('../utils.js')
const { compileClientWithDependenciesTracked } = require('pug');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User } = db;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req,res, next) => {
  res.render('signup', {csrfToken : csrfToken()});
})

router.post('/signup', csrfProtection, userValidator, errorHandler, asyncHandler(async(req, res) => {
  const {username, email, password, confirmPassword} = req.body;
  if (password === confirmPassword){
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
    res.redirect('/signup', errors)
  }
}));


module.exports = router;
