const axios = require('axios');

const chatGPTService = async (message) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHATGPT_API_KEY}`,
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    const apiError = error.response?.data.error?.message || error.message;
    
    // Si la cuota ha sido excedida
    if (error.response?.data?.error?.code === 'insufficient_quota') {
      return 'Lo siento, el chatbot no está disponible en este momento debido a limitaciones de uso.';
    }
    
    // Manejo de otros posibles errores
    throw new Error('Error en la respuesta del chatbot: ' + apiError);
  }
};


module.exports = chatGPTService;
