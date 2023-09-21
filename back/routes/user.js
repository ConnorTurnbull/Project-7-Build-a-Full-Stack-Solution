const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.delete('/delete', userCtrl.delete);
router.post('/read', userCtrl.read);

module.exports = router;