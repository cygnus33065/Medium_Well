var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, checkUnique} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const db = require('../db/models')
const { User } = db;


const userValidator = [
  check("username")
      .exists({ checkFalsy: true })
      .withMessage("Username Required")
      .isLength({ max: 20 })
      .withMessage("Username Too Long"),
  check("email")
      .exists({ checkFalsy: true })
      .withMessage("Email Required")
      .isLength({ max: 50 })
      .withMessage("Email Too Long")
      .isEmail()
      .withMessage("Input is Not an Email"),
  check("password")
      .exists({ checkFalsy: true })
      .withMessage("Password Required")
      .isLength({ min: 8 })
      .withMessage("Password Must Be At Least 8 Characters.")

];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', csrfProtection, (req, res, next) => {
  res.render('signup', {csrfToken : req.csrfToken()});
})

router.post('/signup', csrfProtection, userValidator, errorHandler, asyncHandler(async(req, res) => {
  const {username, email, password, confirmPassword} = req.body;
  
  let errors = req.errors
  checkUnique(username, email);
  if (errors.length === 0 && password === confirmPassword){
    const hashedPassword = await bcrypt.hash(password, 8);
    await User.create({
      username,
      email,
      hashedPassword
    });
    req.session.save(() =>{
      res.redirect('/');
    });
  } else if (password !== confirmPassword){
    errors.push('Passwords do not match')
    res.render('signup', {errors, csrfToken: req.csrfToken() } )
  } else {
    res.render('signup', {errors, csrfToken: req.csrfToken() } )
  }
}));

router.get('/login', csrfProtection, errorHandler, (req, res, next) =>{
  res.render('login', {csrfToken : req.csrfToken()})
})

router.post('/login', csrfProtection, errorHandler, asyncHandler( async(req, res, next) => {
  const { email, password } = req.body

  let errors = req.errors

  const user = await User.findOne({ where: {email: email}})

  if(user) {
    bcrypt.compare(password, user.hashedPassword, (err, passwordMatch) => {
      if(err){
        throw err
      }
      if(passwordMatch){
        req.session.save(() => {
          req.session.loggedin = true
          req.session.username = user.username
          res.render('test', {req, csrfToken : req.csrfToken()})
        })
      } else {
        errors.push("Incorrect email/password.")
        res.render('login', {errors, csrfToken: req.csrfToken() } )
      }
    })

  }
}))
module.exports = router;
