const express = require('express');
const router = express.Router();
const noticeController = require('../controllers/noticeController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, noticeController.addNotice);
router.delete('/:id', authenticateToken, noticeController.deleteNotice);
router.get('/', noticeController.getNotices);
router.put('/edit/:id', authenticateToken, noticeController.editNotice);
router.put('/show/:id',noticeController.ShowNotice)

module.exports = router;
