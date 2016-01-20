var isCommaSeparated = function (data) {
  // alphabates with comma
  var commaListRegEx = /^[A-Za-z,\s]+$/;
  return commaListRegEx.test(data);
};



module.exports = {
  isCommaSeparated: isCommaSeparated
};
