const chatGPTService = require('../services/chatGPTService');

const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const response = await chatGPTService(message);
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { sendMessage };
