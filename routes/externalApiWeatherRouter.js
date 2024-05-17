const express = require('express');
const fetchWeatherDataController = require('../controllers/externalapiWeatherController'); 
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.get('/latlon', fetchWeatherDataController.weatherlatlon);
router.get('/city', fetchWeatherDataController.weathercity);
module.exports = router;
