convertExcel = require('excel-as-json').processFile;
convertExcel('sample-data.xlsx', 'sample-data.json');
console.log('Excel converted successfully');
