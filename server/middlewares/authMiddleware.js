const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = decodedToken;
    next();
  });
};

module.exports = authenticateToken;

