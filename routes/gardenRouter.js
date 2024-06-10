const express = require('express');
const gardenController = require('./../controllers/gardenController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.protect);

router
  .route('/')
  .post(gardenController.addGarden)
  .get(gardenController.getAllGardens)
  .patch(gardenController.updateMyGarden);
router.route('/MyGardens').get(gardenController.getMyGardens);
router
  .route('/:Name')
  .get(gardenController.getGardenByName)
  .delete(gardenController.deleteGarden);

module.exports = router;
