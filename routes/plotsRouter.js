const express = require('express');
const plotsController = require('./../controllers/plotsController');
const authController = require('./../controllers/authController');
const router = express.Router();
router.use(authController.protect);
router.get('/', plotsController.getAllPlots);
router.patch('/:id', plotsController.updatePlot);
router.patch('/:id/Crops', plotsController.harvestPlot);
router.post('/:id/Crops/:Type', plotsController.plantCrop);
router.get('/garden/:id', plotsController.getPlotByGardenID);
router.get('/:id/Rotation', plotsController.getRotation);
router
  .route('/:id')
  .get(plotsController.getPlotByID)
  .delete(plotsController.deletePlot);
module.exports = router;
