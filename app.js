/**
 * Module dependencies
*/
var express  = require('express');

var vhost = 'nodejsapp.local'
var port     = process.env.PORT || 3000;
var ip     = process.env.IP || "localhost";
var path = path = require('path');
var http = require('http');
var app = express();




app.configure(function() {
    // set up our express application
    app.set('port', port);
   // app.use(express.logger('dev')); // log every request to the console
    app.set('view engine', 'html'); // set up html for templating
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + '/public');
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/bower_components',  express.static(__dirname + '/bower_components'));
    app.use('/build',  express.static(__dirname + '/build'));
    app.use(app.router);
  
    

});


require('./app/routes.js')(app);
// development only
if (app.get('env') === 'development') {
    app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
    //Can add build js which is minified
    // TODO
};

var server = http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + vhost+":"+server.address().port);
});


