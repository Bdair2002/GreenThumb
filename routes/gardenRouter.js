const express = require('express');
const gardenController = require('./../controllers/gardenController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.protect);

module.exports = router;
