// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const chatbotRoutes = require('./routes/chatbotRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/weather', weatherRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
