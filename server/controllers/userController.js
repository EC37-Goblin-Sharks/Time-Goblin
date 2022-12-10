const User = require('../models/userModel');
//==================
//NOTE: UPDATE PATH ABOVE ONCE AVAILABLE
//===================

const userController = {};

userController.createUser = (req, res, next) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    points: 0,
  });
  return next();
};

//===================
//CHECK DETAIL ON HOW REQ.BODY IS COMING IN
//====================

userController.getUser = (req, res, next) => {
  User.findOne({ username: req.body.username });
};

userController.updateUser = (req, res, next) => {
  User.findOne({ username: req.body.username });
};

//====================
// FOR STRETCH GOALS LATER
//====================
userController.deleteUser = (req, res, next) => {};

module.exports = userController;
