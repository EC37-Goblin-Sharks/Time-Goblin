const cookieController = {};

// ===================================================
// Set SSID Cookie
// ===================================================

// need to be chained to login routes after verifyUser MW
cookieController.setSSIDCookie = (req, res, next) => {
  const userID = `${res.locals.user._id}`;
  res.cookie('ssid', userID);
  return next();
}

module.exports = cookieController;
