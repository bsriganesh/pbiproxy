require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", req.body, {
      headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    res.json(response.data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(5000, () => console.log("Proxy listening on port 5000"));

