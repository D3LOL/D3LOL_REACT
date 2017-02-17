const express = require('express');
const axios = require('axios');
const router = express.Router();
const qs = require('qs');
const passport = require('passport');

// router.get('/login',)
//login with facebook ID
router.get('/facebook',
		passport.authenticate('facebook'));

			// .get(function(req, res){
			// 	console.log('INSIDE AUTH ROUTER: ')
			// })

router.get('/facebook/return',
	  passport.authenticate('facebook', { failureRedirect: '/login' }),
	  function(req, res) {
	    res.redirect('/');
	  })
			// .get(function(req, res){
			// 	 console.log('INSIDE AUTH ROUTER CALLBACK: ')
			// 	 passport.authenticate('facebook', { failureRedirect: '/login' }),
			// 	  function(req, res) {
			// 	    res.redirect('/');
			// 	  });
				 
			// })


module.exports = router;
