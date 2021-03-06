module.exports = function() {

var request = require('request'),
                url = require("url"),
                jsonpHelper = require('../utils/json_parser'),
                page_validator = require('../utils/page_validator');

    return {

        getFlickr: function(req, res) {
                var data = req.body,
                parsedUrl = url.parse(req.url, true),
                queryAsObject = parsedUrl.query;
            //validate comma separated
            if (!page_validator.isCommaSeparated()) {
                res.send(500, "Invalid Form");
            }
            console.log(queryAsObject.tagvalue+"getFlickr");
            var flickrPublicFeedAPI = {
                uri: 'http://api.flickr.com/services/feeds/photos_public.gne',
                timeout: 1000000,
                qs: {
                    tags: queryAsObject.tagvalue,
                     tagmode: 'all',
                    format: 'json'
                }
            };


            request.get(flickrPublicFeedAPI, function(error, response, body) {

                if (!error && response.statusCode === 200) {

                    try {

                        var json = jsonpHelper.jsonParser(body);
                        var photos = json.items;

                        photos.forEach(function(photo) {
                            photo.media.t = photo.media.m.split('m.jpg')[0] + 't.jpg';
                            photo.media.b = photo.media.m.split('m.jpg')[0] + 'b.jpg';
                        });

                        res.send(200, photos);

                    } catch (e) {
                        res.send(500, 'Api Error '+ e.message);
                    }

                } else {
                     res.send(500, 'Flickr Error');
                    
                }

            });

        }

    };
};
