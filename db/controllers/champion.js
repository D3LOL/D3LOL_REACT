var ChampionModel = require('../models/champion.js');

// `findAll`은 모든 Champion들을 가지고 옵니다.
function findAll(callback) {
  ChampionModel.find({}, callback)
}

// `insertOne`은 Champion을 db에 insert 합니다.
function insertOne(story, callback) {
  ChampionModel.create(story, callback);
}

exports.findAll = findAll;
exports.insertOne = insertOne;
