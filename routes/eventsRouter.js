const express = require('express');
const eventsController = require('./../controllers/eventsController');
const router = express.Router();
router.get('/addEvent', eventsController.addEvent);
const eventsController = require('./../controllers/eventsController');
const express = require('express');
module.exports = router;
