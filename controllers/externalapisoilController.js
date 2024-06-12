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
        
        const apiUrl = `https://rest.isric.org/soilgrids/v2.0/properties/query?lon=${Longitude}&lat=${Latitude}&property=clay&property=sand&depth=0-5cm&value=mean&value=uncertainty`;
        const response = await axios.get(apiUrl);
        
        res.status(200).json({ garden, soilData: response.data });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};


const APIKEY = '863qbwD4rjfU329Ej1wT0cry35gAAKLCRtfoNg6swhg'; 

exports.allplants = async (req, res) => {
    const { plantName } = req.body; 
  
    try {
      const response = await axios.get('https://trefle.io/api/v1/plants/search', {
        params: {
          q: plantName,
          token: APIKEY
        }
      });
  
      return res.status(200).json(response.data);
    } catch (error) {
      console.error('Error searching for plant:', error);
  
      
      return res.status(500).json({ error: 'Failed to search for plant' });
    }
  };
