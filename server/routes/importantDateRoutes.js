const express = require('express');
const router = express.Router();
const importantDateController = require('../controllers/importantDateController');
const authenticateToken = require('../middlewares/authMiddleware');


router.post('/add', authenticateToken, importantDateController.addImportantDate);
router.delete('/:id', authenticateToken, importantDateController.deleteImportantDate);
router.get('/', importantDateController.getImportantDates);
router.put('/edit/:id', authenticateToken, importantDateController.editImportantDate);

module.exports = router;
