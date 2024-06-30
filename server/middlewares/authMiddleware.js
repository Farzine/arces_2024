const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');

const authenticateToken = (req, res, next) => {
  const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Unauthorized' });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
