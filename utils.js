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
    const usernamesAndEmails = []

    for (let i = 0; i < user.length; i++){
        usernamesAndEmails.push(current.dataValues.username)
        usernamesAndEmails.push(current.dataValues.email)
    }
    // console.log(usernamesAndEmails)
    if (usernamesAndEmails.includes(username)){
        errors.push('Username is Taken')
    }
    if (usernamesAndEmails.includes(email)){
        errors.push("Email Already in Use")
    }
};

module.exports = { asyncHandler, csrfProtection, errorHandler, checkUnique};
