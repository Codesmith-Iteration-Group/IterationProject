const db = require('../models/model');

const cookieController = {};

// creating a cookie middleware
cookieController.setCookie = (req, res, next) => {
  console.log('res.locals.userid: ', res.locals.userId);
  // format: res.cookie(name, value, {options});
  // ex. --> res.cookie('cookieName', '34x7f90', { maxAge: 900000, httpOnly: true });
  res.cookie('userId', res.locals.userId, {});
  return next();
};

// checking to see if a cookie exists middleware
cookieController.checkCookie = (req, res, next) => {

}

module.exports = cookieController;
