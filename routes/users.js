var express = require('express');
var router = express.Router();
const {asyncHandler, csrfProtection, errorHandler, checkUnique} = require('../utils.js')
const csrf = require('csurf')
const { check, validationResult } = require('express-validator');
const { compileClientWithDependenciesTracked } = require('pug');
const bcrypt = require('bcryptjs');
const {loginUser, requireAuth, isAuth, logoutUser} = require('../auth.js')
const db = require('../db/models')
const { User, Category } = db;


const userValidator = [
  check("username")
      .exists({ checkFalsy: true })
      .withMessage("Username Required")
      .isLength({ max: 20 })
      .withMessage("Username Too Long")
      .custom((value) => {
        return db.User.findOne({ where: { username: value } })
          .then((user) => {
            if (user) {
              return Promise.reject('The provided Username is already in use by another account');
            }
          });
      }),
  check("email")
      .exists({ checkFalsy: true })
      .withMessage("Email Required")
      .isLength({ max: 50 })
      .withMessage("Email Too Long")
      .isEmail()
      .withMessage("Input is Not an Email")
      .custom((value) => {
        return db.User.findOne({ where: { email: value } })
          .then((user) => {
            if (user) {
              return Promise.reject('The provided Email Address is already in use by another account');
            }
          });
      }),
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

router.get('/signup', csrfProtection, asyncHandler(async(req, res, next) => {
  const categories = await Category.findAll();
  res.render('signup', {categories, csrfToken : req.csrfToken()});
}))

router.post('/signup', csrfProtection, userValidator, errorHandler, asyncHandler(async(req, res) => {
  const {username, email, password, confirmPassword} = req.body;

  let errors = req.errors
  checkUnique(username, email);
  if (errors.length === 0 && password === confirmPassword){
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await User.create({
      username,
      email,
      hashedPassword
    });
    loginUser(req, res, newUser);
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

router.get('/login', csrfProtection, errorHandler, asyncHandler( async(req, res, next) =>{
  const categories = await Category.findAll();
  res.render('login', {categories, csrfToken : req.csrfToken()})
}))

router.post('/login', isAuth, csrfProtection, errorHandler, asyncHandler( async(req, res, next) => {
  const { email, password } = req.body

  let errors = req.errors

  const user = await User.findOne({ where: {email: email}})

  if(user) {
    bcrypt.compare(password, user.hashedPassword, (err, passwordMatch) => {
      if(err){
        throw err
      }
      if(passwordMatch){
        loginUser(req, res, user)
        console.log(req.session.auth)
        req.session.save(() => {
        res.redirect('/')
        })

      } else {
        errors.push("Incorrect email/password.")
        res.render('login', {errors, csrfToken: req.csrfToken() } )
      }
    })

  }
}))

router.post('/logout', (req,res) => {
  logoutUser(req,res);
  res.redirect('/')
})

module.exports = router;
