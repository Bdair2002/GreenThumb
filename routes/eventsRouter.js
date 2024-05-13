const express = require('express');
const eventsController = require('./../controllers/eventsController');
const router = express.Router();
router.get('/test', eventsController.addProduct);
module.exports = router;
