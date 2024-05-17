const db = require('../models/gardenModel');
const catchAsync = require('../utils/catchAsync');
const axios = require('axios');
const Garden = db.Garden;

exports.soillatlon = async (req, res) => {
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
        
        const apiUrl = `https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${Longitude}&lat=${Latitude}`;
        const response = await axios.get(apiUrl);
        
        res.status(200).json({ garden, soilData: response.data });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};
