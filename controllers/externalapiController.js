const axios = require('axios');


const API_KEY = "cb97d46d38b63b09a5d5e5b64a237da2";

exports.weatherlatlon = async (req, res) => {
    const { id } = req.params;


    let lat = '';
    let lon = '';
    if (id === '1') {
        lat = 32.319199;  
        lon = 35.064320;  
    } else {
        return res.status(400).json({ error: 'Invalid workshop ID!' });
    }

   

    try {
        const APIUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
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








