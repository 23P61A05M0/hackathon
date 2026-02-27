const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = 8000;

// Your Gemini API key here
const GEMINI_API_KEY = 'AIzaSyB5uYAlTxWbv-KVA4h88PQi0FBD6hqrABg';

app.use(cors());
app.use(bodyParser.json());

// Serve static files (index.html, style.css, script.js)
app.use(express.static(path.join(__dirname, '/')));

// Serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST /chat route
app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  console.log("🔹 Incoming Message:", userMessage);

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: userMessage }] }]
      }
    );

    console.log("✅ Gemini response:", JSON.stringify(response.data, null, 2));
    const reply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't get that.";
    res.json({ reply });

  } catch (error) {
    console.error("❌ Gemini API Error:", error.response?.data || error.message);
    const errorMsg = error.response?.data?.error?.message || "Gemini API failed.";
    res.status(500).json({ reply: errorMsg });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Gemini chatbot running at http://localhost:${PORT}`);
});
