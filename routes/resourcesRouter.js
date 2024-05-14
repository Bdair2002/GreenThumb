const express = require('express');
const resourcesController = require('./../controllers/resourcesController');
const router = express.Router();
router.get('/addResource', resourcesController.addResource);
module.exports = router;
