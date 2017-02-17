const express = require('express');
const axios = require('axios');
const router = express.Router();
const qs = require('qs');

router.route('/')
			.get(function(req, res){
					var champ = `https://kr.api.pvp.net/api/lol/kr/v2.5/league/challenger?type=RANKED_SOLO_5x5&api_key=RGAPI-19fbe6ff-ea8e-4f8f-ba6c-61f22719ca2c`;
					console.log('cCOMEON!!')
					axios.get(champ)
						.then(function(response){
								console.log('Rank!', response.data);
								res.json(response.data);
						})
						.catch(function(err){
								console.error(err);
						})
			})

module.exports = router;
