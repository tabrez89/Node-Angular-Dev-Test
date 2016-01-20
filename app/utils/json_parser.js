var jsonParser = function (jsonpData) {

  try {
    var start = jsonpData.indexOf('({');
    var end = jsonpData.lastIndexOf('})');
    var string = jsonpData.substring(start + 1, end + 1);

    // remove escaped single quotes since they are not valid json
    string = string.replace(/\\'/g, "'");

    return JSON.parse(string);
  }
  catch (e) {
    var error = new Error('Error :' + e.message);
    throw error;
  }

};


module.exports = {
  jsonParser: jsonParser
};
