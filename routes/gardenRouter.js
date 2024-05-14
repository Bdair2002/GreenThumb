const express = require('express');
const gardenController = require('./../controllers/gardenController');
const authController = require('./../controllers/authController');
const router = express.Router();

router.use(authController.protect);
router.post('/addGarden', gardenController.addGarden);
router.get('/', gardenController.getAllGardens);
router.get('/getMyGardens', gardenController.getMyGardens);
router.get('/getGarden', gardenController.getGardenByName);
router.delete('/deleteGarden', gardenController.deleteGarden);
router.patch('/updateGarden', gardenController.updateMyGarden);
module.exports = router;
