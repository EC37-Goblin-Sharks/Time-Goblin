const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();
console.log(`ENTERING API ROUTERS`);


//==========================
//Route for getting user info : for frontend
//==========================
router.get('/home', userController.getUser, (req, res) => {
  return res.status(200).json(res.locals.user);
})


//==========================
//Route for signing up as new user: redirects to login page after
//==========================
router.post('/signup/request', userController.createUser, (req, res) => {
  return res.redirect('/');
});

//==========================
//Route for logging in as existing user
//==========================
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    return res.redirect('/home');
  }
);
//======================
//Route for updating user data (score)
//======================
// router.post('/updateUser', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

module.exports = router;
