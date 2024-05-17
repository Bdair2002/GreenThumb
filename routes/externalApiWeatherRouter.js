const express = require('express');
const fetchWeatherDataController = require('../controllers/externalapiWeatherController'); 
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);
router.get('/weather/latlon', fetchWeatherDataController.weatherlatlon);
router.get('/weather/city', fetchWeatherDataController.weathercity);
module.exports = router;
