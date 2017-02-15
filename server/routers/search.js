const express = require('express');
const axios = require('axios');
const router = express.Router();
const qs = require('qs');

router.route('/')
			.get(function(req, res){
				 console.log('INSIDE ROUTER:::::xnbhhhh`',typeof qs.parse(req.url))
				 var username = encodeURI(qs.parse(req.url)['/?username'])
					var dummy = `https://kr.api.pvp.net/api/lol/kr/v1.4/summoner/by-name/${username}?api_key=RGAPI-19fbe6ff-ea8e-4f8f-ba6c-61f22719ca2c`;
					axios.get(dummy)
						.then(function(response){
								console.log(response.data);
								res.json(response.data);
						})
						.catch(function(err){
								console.error(err);
						})
			})

module.exports = router;
