var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  facebook : {
    id: String,
    token: String,
    name: String,
    email: String,
    picture: String
  }
   
});

var userModel = mongoose.model('User', userSchema);

module.exports = userModel;

  // newUser.facebook.id    = profile.id; // set the users facebook id                   
    // newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
    // newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
    // newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
