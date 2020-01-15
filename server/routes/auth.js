const express = require('express');
const router = express.Router();

const {Signup} = require('../controllers/auth');

router.get('/signup', Signup);

module.exports = router;