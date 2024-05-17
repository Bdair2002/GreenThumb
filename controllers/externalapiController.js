const axios = require('axios');
const db = require('./../models/gardenModel');
const Garden = db.Garden;
const API_KEY = "cb97d46d38b63b09a5d5e5b64a237da2"; 


exports.weatherlatlon = async (req, res) => {
    try {
        const extrnalApi = await Garden.findAll({
            attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
            order: [['owner_id', 'ASC']]
        });

        if (extrnalApi.length === 0) {
            return res.status(404).json({ error: 'No gardens found' });
        }


        const weatherData = await Promise.all(extrnalApi.map(async garden => {
            const { Latitude, Longitude } = garden;
            const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Latitude}&lon=${Longitude}&appid=${API_KEY}&units=metric`;
            const response = await axios.get(APIUrl);
            return { garden, weather: response.data };
        }));

        res.status(200).json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};


exports.weathercity = async (req, res) => {
    try {
        const gardens = await Garden.findAll({
            attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
            order: [['owner_id', 'ASC']]
        });

        if (gardens.length === 0) {
            return res.status(404).json({ error: 'No gardens found' });
        }

        const weatherDataPromises = gardens.map(async garden => {
            const { Location } = garden;
            const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${Location}&appid=${API_KEY}&units=metric`;
            const response = await axios.get(APIUrl);
            return { garden, weather: response.data };
        });

        const weatherData = await Promise.all(weatherDataPromises);

        res.status(200).json(weatherData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
