const csrf = require('csurf');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require('express-validator');
const db = require('./db/models')
const { User } = db;

const errorHandler = (req, res, next) => {
    const validationErrors = validationResult(req);
    req.errors = [];
    if (!validationErrors.isEmpty()){
        req.errors = validationErrors.array().map((error) => error.msg);

    } 
    next();
}

const checkUnique = async (username, email) => {
   
    const user = await User.findAll({
        attributes: ['username', 'email']
    });
    console.log(user);
    if (user.dataValues.username.includes(username)){
        errors.push('Username is Taken')
    }
    if (user.dataValues.email.includes(email)){
        errors.push("Email Already in Use")
    }
};

module.exports = { asyncHandler, csrfProtection, errorHandler, checkUnique};
