const express = require('express');
const fetchWeatherDataController = require('../controllers/externalapiController'); // Corrected path if necessary
const router = express.Router();

router.get('/weather/latlon/', fetchWeatherDataController.weatherlatlon);
router.get('/weather/city/', fetchWeatherDataController.weathercity);
module.exports = router;
