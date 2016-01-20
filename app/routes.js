module.exports = function(app) {

    var api = {
        flickr :require('./api/flickrapi.js')()
    };
    app.get('/home', function(req, res){
        res.render('static/index',{});
    });
     app.get('/img', function(req, res){
      res.render('static/views/image',{});
    });
     app.get('/', function(req, res){
        res.render('static/index',{});
    });

     app.get('/api/flickr/getFlickr',api.flickr.getFlickr);

};