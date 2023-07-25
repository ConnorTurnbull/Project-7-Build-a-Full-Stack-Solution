const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config')
const commentCtrl = require('../controllers/comment');

router.get('/comments', commentCtrl.getComments);
router.post('/comment', multer, commentCtrl.newComment);

module.exports = router;