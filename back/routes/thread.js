const express = require('express');
const router = express.Router();
const threadCtrl = require('../controllers/thread');

router.post('/thread', threadCtrl.newThread);
router.get('/thread', threadCtrl.getThread);
router.put('/thread/subscribe', threadCtrl.subscribe);

module.exports = router;