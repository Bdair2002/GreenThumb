const db = require('../models/gardenModel');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');
const Garden = db.Garden;
const APIKEY = "cb97d46d38b63b09a5d5e5b64a237da2"; 

exports.weatherlatlon = async (req, res) => {
    try {
        const { id } = req.body;

        const garden = await Garden.findOne({
            where: { id },
            attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
        });

        if (!garden) {
            return res.status(404).json({ error: 'Garden not found' });
        }

        const { Latitude, Longitude } = garden;
        const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&appid=${APIKEY}&units=metric`;
        const response = await axios.get(APIUrl);

        res.status(200).json({ garden, weather: response.data });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

exports.weathercity = async (req, res) => {
    try {
        const { id } = req.body;

        const garden = await Garden.findOne({
            where: { id },
            attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
        });

        if (!garden) {
            return res.status(404).json({ error: 'Garden not found' });
        }

        const { Location } = garden;
        const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${Location}&appid=${APIKEY}&units=metric`;
        const response = await axios.get(APIUrl);

        res.status(200).json({ garden, weather: response.data });
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};




const usdaPestApiUrl = 'https://plantsdb.xyz/v1/plants/search&output=json'; 

exports.ClimateData = async (req, res) => {
   
try {
    const { id } = req.body;

    const garden = await Garden.findOne({
        where: { id },
        attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
    });

    if (!garden) {
        return res.status(404).json({ error: 'Garden not found' });
    }

    const { Latitude, Longitude } = garden;
    const APIUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${Latitude},${Longitude}&apikey=WxRaYsHJq5qrjhWfmQeSfD1W95UYrdWh`;
    const response = await axios.get(APIUrl);

    res.status(200).json({ garden, weather: response.data });
} catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
}

  };