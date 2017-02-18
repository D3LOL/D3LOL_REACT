var mongoose = require('mongoose');

var championSchema = mongoose.Schema({
  id: Number,
  key: String,
  name: String,
  title: String,
  skins: [],
  info: {
    attack: Number,
    defense: Number,
    magic: Number,
    difficulty: Number  
  },
  lore: String,
  blurb: String,
  allytips: [],
  enemytips: [],
  tags: [],
  partype: String,
  stats: {
    armor: Number,
    armorperlevel: Number,
    attackdamage: Number,
    attackdamageperlevel: Number,
    attackrange: Number,
    attackspeedoffset: Number, 
    attackspeedperlevel: Number,
    crit: Number,
    critperlevel: Number,
    hp: Number,
    hpperlevel: Number,
    hpregen: Number,
    hpregenperlevel: Number,
    movespeed: Number,
    mp: Number,
    mpperlevel: Number,
    mpregen: Number,
    mpregenperlevel: Number,
    spellblock: Number,
    spellblockperlevel: Number
  },
  spells: [],
  passive: {
    name: String,
    description: String,
    image: {
      full: String
    }
  } 
});

var championModel = mongoose.model('Champion', championSchema);

module.exports = championModel;