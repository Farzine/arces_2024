const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const imageController = require('../controllers/imageController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/upload', authenticateToken, upload.single('image'), imageController.uploadImage);
router.delete('/:id', authenticateToken, imageController.deleteImage);
router.get('/', imageController.getImages);

module.exports = router;
