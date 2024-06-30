const express = require('express');
const router = express.Router();
const researchTrackController = require('../controllers/researchTrackController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, researchTrackController.addResearchTrack);
router.put('/update/:id', authenticateToken, researchTrackController.updateResearchTrackTopics);
router.delete('/:id', authenticateToken, researchTrackController.deleteResearchTrack);
router.get('/', researchTrackController.getResearchTracks);

module.exports = router;
