const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const client = axios.create({
    validateStatus: () => true
});

const PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('hello world')
})
        
app.get('/:gameid', function(req, res) {
  client.get(`https://www.roblox.com/users/favorites/list-json?assetTypeId=9&itemsPerPage=100&pageNumber=1&userId=${req.params.gameid}` ).then(function(result) {
    res.send(result.data);
  })
})

app.listen(PORT, function() {
    console.log('Listening on port:', PORT);
})
