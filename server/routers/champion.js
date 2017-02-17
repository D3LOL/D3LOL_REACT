const express = require('express');
const championController = require('../../db/controllers/champion.js');
const router = express.Router();

router.get('/', (req, res) => {
  championController.findAll(function(err, champions){
    if(err) throw err;
    console.log("GETTING CHAMPION DATA SUCCESS");
    res.json(champions);
  })
})

module.exports = router;
