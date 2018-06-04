var express = require('express');
var app = express();
var port = process.env.PORT || 3030;
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
var appRoutes = require('./app/routes/api')(router);

var path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);


mongoose.connect('mongodb://MilkyWay:The@ds157089.mlab.com:57089/mybase', function(err) {
if (err) {
    console.log('Not connected to the database:' + err);
} else {
    console.log('Successfully connected to Database');
}

});
app.get('*', function (req, res, next){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});
app.get('/', function(req,res, next){
    res.send('Hello World');
});

app.listen(3030, function() {
    console.log("server is running");
});
