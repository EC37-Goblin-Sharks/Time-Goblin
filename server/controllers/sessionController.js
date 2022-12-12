const Session = require('../models/sessionModel');

const sessionController = {};

// ===================================================
// Creates and saves a new session
// ===================================================

// needs to be chained to login route after verifyUser.createSSID MW
sessionController.startSession = (req, res, next) => {
  const userID = res.locals.user._id;
  Session.create({cookieId: userID}, (err, cookie) => {
    if (err) {
      return next({
        log: `startSession in sessionController: ERROR: ${
          typeof err === 'object' ? JSON.stringify(err) : err
        }`,
        message: {
          err: 'Error occurred in startSession method of sessionController.',
        },
      })
    }
    else {
      return next();
    }
  })
    
};

sessionController.isLoggedIn = (req, res, next) => {
  const ssid = req.cookies.ssid;
  Session.findOne({cookieID: ssid})
  .then((ssid) => {
    if (ssid === null) {
      return res.redirect('/');
    }
    else {
      return next();
    }
  }).catch((err) => {
    return next({ log: err,
    message: { err: 'Error occured in sessionController.isLoggedIn' }
    })
  })
}
  
  module.exports = sessionController;
  