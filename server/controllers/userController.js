const User = require('../models/userModel');

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
      next({ log: err, message: 'error in userController.createUser' });
    });
};

userController.getUser = (req, res, next) => {
  console.log(`ENTERED USER CONTROLLER getUser`);
  const { username } = req.body;
  User.findOne({ username })
    .then((data) => {
      res.locals.user = data;
      return next();
    })
    .catch((err) => {
      next({ log: err, message: 'error in userController.getUser' });
    });
};

userController.verifyUser = (req, res, next) => {
  console.log(`ENTERED VERIFY:  `);
  const { password, username } = req.body;
  User.findOne({ username: `${username}` })
    .then((doc) => {
      if (doc.password === password) {
        res.locals.user = doc;
      } else {
        res.redirect('/signup');
      }
      return next();
    })
    .catch((err) => {
      next({ log: err, message: 'error in userController.verifyUser' });
    });
};

userController.updateUser = (req, res, next) => {
  User.findOne({ username: req.body.user });
};

//====================
// FOR STRETCH GOALS LATER
//====================
userController.deleteUser = (req, res, next) => {};

module.exports = userController;
