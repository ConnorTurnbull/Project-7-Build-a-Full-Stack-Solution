const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

router.post('/post', postCtrl.newPost);
router.get('/post', postCtrl.getPost);

module.exports = router;