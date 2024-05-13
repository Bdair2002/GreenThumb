const express = require('express');
const resourcesController = require('./../controllers/resourcesController');
const router = express.Router();
router.get('/test', resourcesController.addProduct);
module.exports = router;
