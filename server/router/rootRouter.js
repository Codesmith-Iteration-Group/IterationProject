const express = require('express');
const userController = require('../controllers/userController');
const rootController = require('../controllers/rootController');
const router = express.Router();
const path = require('path');

router.get('/', rootController.checkCookie, (req, res) => {
    return res.locals.cookieStatus ? res.status(200).redirect('/home') : res.status(200).redirect('/user/login');
});



module.exports = router;