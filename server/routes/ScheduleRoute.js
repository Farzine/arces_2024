const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, ScheduleController.addSchedule);
router.delete('/:id', authenticateToken, ScheduleController.deleteSchedule);
router.get('/', ScheduleController.getSchedule);


module.exports = router;
