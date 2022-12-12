const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const userController = {};

userController.createUser = (req, res, next) => {
  console.log(`ENTERED USER CONTROLLER createUser`);
  const { username, password, firstName, lastName } = req.body;
  User.create({
    username,
    password,
    firstName,
    lastName,
    points: 0,
  })
    .then((userData) => {
      res.locals.newUser = userData;
      return next();
    })
    .catch((err) => {
      next({
        log: err,
        message: { err: 'error in userController.createUser' },
      });
    });
};

userController.getUser = (req, res, next) => {
  console.log(`ENTERED USER CONTROLLER getUser`);
  const userID = req.cookies.ssid;
  User.findOne({ _id: userID })
    .then((data) => {
      res.locals.user = data;
      return next();
    })
    .catch((err) => {
      return next({
        log: err,
        message: { err: 'error in userController.getUser' },
      });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log(`ENTERED VERIFY:  `);
  const { password, username } = req.body;

  User.findOne({ username: `${username}` })
    .then((doc) => {
      // if username doesn't exist, send to sign up
      if (!doc) {
        return res.redirect('/signup');
      }
      // check password
      bcrypt
        .compare(password, doc.password)
        .then((result) => {
          if (!result) {
            return res.redirect('/');
          } else {
            res.locals.user = doc;
            return next();
          }
        })
        .catch((err) => {
          next({
            log: err,
            message: {
              err: 'error in comparing hash of userController.verifyUser',
            },
          });
        });
    })
    .catch((err) => {
      next({
        log: err,
        message: { err: 'error in userController.verifyUser' },
      });
    });
};

userController.updateUser = (req, res, next) => {
  const userID = req.cookies.ssid;
  const { points } = req.body;
  console.log(`POINTS from UpdateUser:  `, points);
  User.updateOne({ _id: userID }, { points })
    .then(() => next())
    .catch((err) => {
      next({
        log: err,
        message: {
          err: 'error in comparing hash of userController.updateUser',
        },
      });
    });
};

//====================
// FOR STRETCH GOALS LATER
//====================
userController.deleteUser = (req, res, next) => { };

module.exports = userController;
