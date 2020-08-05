const jwt = require('jsonwebtoken');
const Constants = require('../config/constants');

module.exports = function (req, res, next) {
  //Get token from the header
  const token = req.header('x-auth-token');

  //Check if no token

  if (!token)
    return res.status(401).send({ msg: 'No token, Authorization denied' });
  //Verify Token
  try {
    const decoded = jwt.verify(token, Constants.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ mgs: 'Token is not valid' });
  }
};
