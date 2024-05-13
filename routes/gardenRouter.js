const express = require('express');
const gardenController = require('./../controllers/gardenController');
const router = express.Router();
router.get('/test', gardenController.addProduct);
module.exports = router;
