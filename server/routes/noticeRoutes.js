const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, noticeController.addNotice);
router.delete('/:id', authenticateToken, noticeController.deleteNotice);
router.get('/', noticeController.getNotices);

module.exports = router;
