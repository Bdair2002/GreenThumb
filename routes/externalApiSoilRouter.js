const express = require('express');
const fetchsoilDataController = require('../controllers/externalapisoilController'); 
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.get('/latlon', fetchsoilDataController.soillatlon);
router.get('/plants', fetchsoilDataController.allplants);
module.exports = router;
