const express = require('express');
const plotsController = require('./../controllers/plotsController');
const router = express.Router();
router.get('/test', plotsController.addProduct);
module.exports = router;
