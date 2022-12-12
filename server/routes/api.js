const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();
console.log(`ENTERING API ROUTERS`);

//==========================
//Route for signing up as new user: redirects to login page after
//==========================
router.post('/signup/request', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
});

//==========================
//Route for logging in as existing user
//==========================
router.get(
  '/username',
  userController.getUser,
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    res
      .status(200)
      //IS THIS THE RIGHT PATH?? WHERE DO I SEND WHEN NOT NEW HTML?
      .sendFile(path.resolve(__dirname, '../client/components/home'));
  }
);
//======================
//Route for updating user data (score)
//======================
// router.post('/updateUser', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

module.exports = router;
