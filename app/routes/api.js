var User = require('../models/user');


module.exports = function(router) {
    router.post('/user-data', function (req, res, next) {
var user = new User();
user.username = req.body.username;
user.password = req.body.password;
user.email = req.body.email;
if(req.body.username = null || req.body.username == '' || req.body.password == null || req.body.password == '' || req.body.email == null || req.body.email == '') {
res.send('Ensure username,password and email are all correct and provided.');
res.json({ success: false,  message: 'Ensure username,password,email'});
} else {
    user.save(function(err){
        if(err){
            res.json({success: false, message:"Username or Email already exist"});
        } else {
            res.json({success: true , message:"user created!"});
        }
    });

}
    });
        router.post('/authenticate', function(req, res){
      User.findOne({ username : req.body.username}).select('email username password').exec(function(err, user){
          if (err) throw err;
          if (!user) {
              res.json({ success: false, message: 'Could not authenticate user'});
          } else if(user) {
var validPassword = user.comparePassword(req.body.password);
if(!validPassword){
    res.json({ success: false, message: 'Could not authenticate service'});
} else {
    res.json({ success: true, message: 'User authenticated!'})

}
}          
      });
router.get('/login', function(err, users){
    Users.find({}, function(err,users){
        if(err) throw err;
        User.findOne({ username: req.decoded.username } , function(err, User) {
            
        })
    })
})
    })

    return router;
    }
