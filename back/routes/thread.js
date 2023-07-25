const express = require('express');
const router = express.Router();
const threadCtrl = require('../controllers/thread');

router.post('/thread', threadCtrl.newThread);
router.get('/thread', threadCtrl.getThread);
router.patch('/thread/subscribe', threadCtrl.subscribe);
router.patch('/thread/unsubscribe', threadCtrl.unsubscribe);

module.exports = router;