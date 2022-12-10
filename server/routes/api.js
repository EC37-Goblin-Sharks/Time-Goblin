const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/newUser', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.get('/', userController.getUser, (req, res) =>
  res.status(200).json(res.locals.response)
);

router.post('/updateUser', userController.updateUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});
