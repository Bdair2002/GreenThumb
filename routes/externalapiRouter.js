const express = require('express');
const fetchWeatherDataController = require('../controllers/externalapiController'); // Corrected path if necessary
const router = express.Router();

router.get('/weather/latlon/:id', fetchWeatherDataController.weatherlatlon);
router.get('/weather/city/:id', fetchWeatherDataController.weathercity);
module.exports = router;
