const mongoose = require('mongoose') ;
const request = require('request');
const championmodel = require('./db/controllers/champion.js');

mongoose.connect('mongodb://localhost/d3lol');

var isJSONResponse = function(headers) {
  return headers['content-type'].includes('json');
};

let champInfoUrl = "https://global.api.pvp.net/api/lol/static-data/kr/v1.2/champion?champData=all&api_key=RGAPI-ec43eabd-1094-4054-aedf-7cea249a4076";

var getJSONFromRiotGames = function(url, callback) {
  request.get(url, function(err, response, body) {
    var data = null;
    if (err) {
      callback(err, null);
    } else if (!isJSONResponse(response.headers)) {
      callback(new Error('Response did not contain JSON data.'), null);
    } else {
      data = JSON.parse(body);
      callback(null, data);
    }
  });
};

getJSONFromRiotGames(champInfoUrl, function(err, data) {
  if (err) throw err;
  var key = Object.keys(data.data);
  for(let i = 0; i < key.length; i++) {
    championmodel.insertOne(data.data[key[i]], function(err) {
      if (err) throw err;
    })
  }  
});

