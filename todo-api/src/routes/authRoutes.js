const express = require('express');
const router = express.Router();
const { postLogin, postSignUp } = require("../controllers/authController")

router.post('/login', postLogin);
router.post('/signup', postSignUp);

module.exports = router;
