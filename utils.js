const csrf = require('csurf');

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);
const csrfProtection = csrf({ cookie: true });
const { check, validationResult } = require('express-validator');


const errorHandler = (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()){
        req.errors = validationErrors.array().map((error) => error.msg);
        // console.log(errors);
        // const err = Error('Bad Request');
        // err.errors = errors;
        // err.status = 400;
        // err.title = 'Bad Request';
        // next(err);
    } next();
}

// const userValidator = [
//     check("username")
//         .exists({ checkFalsy: true })
//         .withMessage("Username Required")
//         .isLength({ max: 20 })
//         .withMessage("Username Too Long"),
//     check("email")
//         .exists({ checkFalsy: true })
//         .withMessage("Email Required")
//         .isLength({ max: 50 })
//         .withMessage("Email Too Long")
//         .isEmail()
//         .withMessage("Input is Not an Email"),
//     check("password")
//         .exists({ checkFalsy: true })
//         .withMessage("Password Required")
//         .isLength({ min: 8 })
//         .withMessage("Password Must Be At Least 8 Characters.")
//         .equals("password", "confirmPassword")
//         .withMessage("Passwords Do Not Match")
// ];


module.exports = { asyncHandler, csrfProtection, errorHandler };
