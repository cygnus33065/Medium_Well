const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require('express-validator');
const errorHandler = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()){
        const errors = validationErrors.array().map((error) => error.msg);
        const err = Error('Bad Request');
        err.errors = errors;
        err.status = 400;
        err.title = 'Bad Request';
        return next(err);
    } next();
}

const userValidator = [
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ max: 20 })
        .withMessage('Invalid Username'),
    check('email')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .isEmail()
        .withMessage('Invalid Email Address'),
    check('password')
        .exists({ checkFalsy: true })
        .isStrongPassword() 
        .withMessage("Password Doesn't Meet Requirements")
];


module.exports = asyncHandler, csrfProtection;