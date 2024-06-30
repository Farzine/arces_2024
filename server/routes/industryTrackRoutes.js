const express = require('express');
const router = express.Router();
const industryTrackController = require('../controllers/industryTrackController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, industryTrackController.addIndustryTrack);
router.put('/update/:id', authenticateToken, industryTrackController.updateIndustryTrackTopics);
router.delete('/:id', authenticateToken, industryTrackController.deleteIndustryTrack);
router.get('/', industryTrackController.getIndustryTracks);

module.exports = router;
