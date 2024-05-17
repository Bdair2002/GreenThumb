const axios = require('axios');
const db = require('./../models/gardenModel');
const Garden = db.Garden;
const API_KEY = "cb97d46d38b63b09a5d5e5b64a237da2";

exports.weatherlatlon = async (req, res) => {


    try
    {
      const externalApi = await Garden.findAll({
        attributes: ['owner_id', 'Location', 'Latitude', 'Longitude'],
        order: [
          ['owner_id', 'ASC']
        ]
      });


    }
    catch (error) {
      res.status(400).sendStatus(400).send(console.error(error));
    }

    try {
        const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${extrnalApi.Latitude}&lon=${extrnalApi.Location}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(APIUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('API call failed:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }

};


exports.weathercity= async (req, res) => {
    const { id } = req.params;



    let city = '';
    if (id === '1') {
       city = "Nablus"; 
    } else {
        return res.status(400).json({ error: 'Invalid workshop ID!' });
    }



    try {
        const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(APIUrl);
        res.status(200).json(response.data);
    } catch (error) {
        console.error('API call failed:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }


};