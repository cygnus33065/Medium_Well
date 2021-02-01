var express = require('express');
const asyncHandler = require('../utils.js')
const { compileClientWithDependenciesTracked } = require('pug');
var router = express.Router();
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User } = db;
const csrfProtection = require('../utils.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', csrfProtection, asyncHandler(async(req, res) => {
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

  }
  
}));


module.exports = router;
