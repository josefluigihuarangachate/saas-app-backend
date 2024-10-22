###### COMANDOS A EJECUTAR EL PROYECTO

# Instalar dependencias del proyecto

npm install

# Ejecutar el servidor con nodemon

npx nodemon src/app.js

##### EN EL .env CONFIGURAR ESTOS PARAMETROS

VIDEO OPENWEATHER PARA OBTENER EL API: https://www.youtube.com/watch?v=tPlD-CmH7H4&ab_channel=CodingVoyagers
VIDEO CHATGPT PARA OBTENER EL API: https://www.youtube.com/watch?v=OB99E7Y1cMA&ab_channel=AndersJensen

OPENWEATHER_API_KEY=tu_clave
CHATGPT_API_KEY=tu_clave

OPENWEATHER_API_KEY=8165300133582f39892141780478e406
CHATGPT_API_KEY=api_key

###### APIS O RUTAS DEL BACKEND

Chatbot (POST):
Metodo POST: http://localhost:5000/api/chatbot/message
Body (JSON):
{
"message": "Hola, ¿cómo estás?"
}

Clima (GET):
Metodo GET: http://localhost:5000/api/weather/{city}
URL: http://localhost:5000/api/weather/Lima
