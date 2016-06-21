var RequestClass = function() {
  // run code here, or...
  convertExcel = require('excel-as-json').processFile;
  convertExcel('sample-data.xlsx', 'sample-data.json');
  console.log('Excel converted successfully');
};

// ...add a method, which we do in this example:
RequestClass.prototype.getList = function() {
  return "My List";
};

// now expose with module.exports:
exports.Request = RequestClass;
