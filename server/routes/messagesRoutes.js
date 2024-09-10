const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messageController');
const authenticateToken = require('../middlewares/authMiddleware');



router.post('/add', authenticateToken, messagesController.addMessages);
router.delete('/:id', authenticateToken, messagesController.deleteMessages);
router.get('/', messagesController.getMessages);
router.put('/edit/:id', authenticateToken, messagesController.editMessages);

module.exports = router;
