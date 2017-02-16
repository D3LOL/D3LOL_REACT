var mongoose = require('mongoose');

var championSchema = mongoose.Schema({

});

var championModel = mongoose.model('Champion', championSchema);

module.exports = championModel;