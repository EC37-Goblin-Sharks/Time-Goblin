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
      res.locals.user = userData;
      return next();
    })
    .catch((err) => {
      next({ log: err, message: 'error in userController.createUser' });
    });
};

//===================
//CHECK DETAIL ON HOW REQ.BODY IS COMING IN
//====================

userController.getUser = (req, res, next) => {
  console.log(`ENTERED USER CONTROLLER getUser`);
  const { userName } = req.params;
  User.findOne({ username: userName })
    .then((data) => {
      res.locals.user = data;
    })
    .catch((err) => {
      next({ log: err, message: 'error in userController.getUser' });
    })
    .then(() => {
      return next();
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
