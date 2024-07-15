const express = require('express');
const router = express.Router();
const SessionListController = require('../controllers/sessionListController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, SessionListController.addSessionList);
router.delete('/:id', authenticateToken, SessionListController.deleteSessionList);
router.put('/edit/:id', SessionListController.updateSessionList);
router.get('/', SessionListController.getSessionList);


module.exports = router;
