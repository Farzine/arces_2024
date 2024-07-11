const express = require('express');
const router = express.Router();
const importantUpdateController = require('../controllers/importantUpdateController');
const authenticateToken = require('../middlewares/authMiddleware');



router.post('/add', authenticateToken, importantUpdateController.addImportantUpdate);
router.delete('/:id', authenticateToken, importantUpdateController.deleteImportantUpdate);
router.get('/', importantUpdateController.getImportantUpdate);
router.put('/edit/:id', authenticateToken, importantUpdateController.editImportantUpdate);

module.exports = router;
