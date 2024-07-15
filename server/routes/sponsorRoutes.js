const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const sponsorController = require('../controllers/sponsorController');
const authenticateToken = require('../middlewares/authMiddleware');

router.post('/upload', authenticateToken, upload.single('image'), sponsorController.uploadSponsorImage);
router.delete('/:id', authenticateToken, sponsorController.deleteSponsorImage);
router.get('/', authenticateToken, sponsorController.getSponsorImages);

module.exports = router;
