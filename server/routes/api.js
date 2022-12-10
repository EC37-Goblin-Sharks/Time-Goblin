const express = require('express');
const { ModuleFilenameHelpers } = require('webpack');

const userController = require('../controllers/userController');

const router = express.Router();
console.log(`ENTERING API ROUTERS`);
router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.get('/:userName', userController.getUser, (req, res) =>
  res.status(200).json(res.locals.user)
);

// router.post('/updateUser', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.user);
// });

module.exports = router;
