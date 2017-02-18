module.exports = function(app, passport) {

    // route for home page
    // app.get('/', function(req, res) {
    //     res.redirect('/'); // load the index.ejs file
    // });

    // route for login form
    // route for processing the login form
    // route for signup form
    // route for processing the signup form

    // route for showing the profile page
    // app.get('/profile', isLoggedIn, function(req, res) {
    //     res.render('profile.ejs', {
    //         user : req.user // get the user out of session and pass to template
    //     });
    // });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    // route for facebook authentication and login
    app.get('/auth/facebook',
        passport.authenticate('facebook', { scope : ['public_profile','email'] }));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', function(req, res, next){
        passport.authenticate('facebook', function(err, user, info){
            if (err) { return next(err); }
            if (!user) { return res.redirect('/login'); }

            req.logIn(user, function(err) {
              if (err) { return next(err); }
              console.log('ASDASDASDASD::::', user);
              return res.redirect('/');
            });
          })(req, res, next);
    });

    




         
        // {
        //     successRedirect : '/',
        //     failureRedirect : '/login',
        //     failureFlash: "Log In Failed",
        //     successFlash: "Welcome!"
        // },
          
    app.get('/test', function(req,res){
        console.log('TEST::: ', req.user)
        res.redirect('/')
    })
    // route for logging out
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

};
