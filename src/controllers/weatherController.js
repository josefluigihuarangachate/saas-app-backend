const getWeather = require('../services/weatherService');

const fetchWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const data = await getWeather(city);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { fetchWeather };
