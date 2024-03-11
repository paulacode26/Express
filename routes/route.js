const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('home page');
});

router.get('/login', (req, res, next) => {
    res.send('login page');
});

router.get('/register', (req, res, next) => {
    res.send('register page');
});

module.exports = router