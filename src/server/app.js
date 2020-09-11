const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/characters', (req, res) => {
  request(
    { url: `https://gbngq2s2e0.execute-api.eu-west-2.amazonaws.com/api/characters` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

app.get('/api/characters/:id', (req, res) => {
  request(
    { url: `https://rickandmortyapi.com/api/character/${req.params.id}` },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }
      res.json(JSON.parse(body));
    }
  )
});

const PORT = 3030;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
