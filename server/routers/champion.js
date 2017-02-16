const express = require('express');
const axios = require('axios');
const router = express.Router();
const qs = require('qs');

router.route('/')
      .get(function(req, res){
         console.log('INSIDE ROUTER::::: ',typeof qs.parse(req.url))
          var championData = `https://global.api.pvp.net/api/lol/static-data/kr/v1.2/champion?champData=all&api_key=RGAPI-ec43eabd-1094-4054-aedf-7cea249a4076`;
          axios.get(championData)
            .then(function(response){
                console.log(response.data);
                res.json(response.data);
            })
            .catch(function(err){
                console.error(err);
            })
      })

module.exports = router;
