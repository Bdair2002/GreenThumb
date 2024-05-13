const express = require('express');
const cropsController = require('./../controllers/cropsController');
const router = express.Router();
router.get('/test', cropsController.addProduct);
module.exports = router;
