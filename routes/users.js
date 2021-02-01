var express = require('express');
const asyncHandler = require('../utils.js')
const { compileClientWithDependenciesTracked } = require('pug');
var router = express.Router();
const bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', asyncHandler(async(req, res) => {
  const {username, email, password, confirmPassword} = req.body;
  if (password === confirmPassword){
    const hashedPassword = await bcrypt.hash(password, 8)
    req.session.save(() =>{
      res.redirect('/')
    })
  }
  
}));


module.exports = router;
