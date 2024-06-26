const express = require('express');
const cropsController = require('./../controllers/cropsController');
const authController = require('./../controllers/authController');
const router = express.Router();
router.use(authController.protect);

router.delete('/:id', cropsController.deleteCrop);
router.patch('/:id', cropsController.updateCrop);
router.get('/', cropsController.getAllCrops);
router.get('/garden/:id', cropsController.getByGardenID);
router.get('/plot/:id', cropsController.getByPlotID);
module.exports = router;
