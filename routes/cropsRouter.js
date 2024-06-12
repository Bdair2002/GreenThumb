const express = require('express');
const cropsController = require('./../controllers/cropsController');
const authController = require('./../controllers/authController');
const router = express.Router();
router.use(authController.protect);

// router.post('/', cropsController.addCrops);
router.delete('/:id', cropsController.deleteCrop);
router.patch('/:id', cropsController.updateCrop);
router.get('/', cropsController.getAllCrops);
router.get('/garden/:id', cropsController.getByGardenID);
router.get('/plot/:id', cropsController.getByPlotID); // not that u need to change this u need to put the crops in garden url
module.exports = router;
