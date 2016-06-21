var express =   require("express");
var multer  =   require('multer');
var app         =   express();
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './uploads');
  },
  filename: function (req, file, callback) {
    callback(null, 'sample-data.xlsx');
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

app.get('/',function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/uploadExcel',function(req,res){
  upload(req,res,function(err) {
    if(err) {
      return res.end("Error uploading file.");
    }
    res.end("File is uploaded");
    convertExcel = require('excel-as-json').processFile;
    convertExcel('./uploads/sample-data.xlsx', 'sample-data.json');
    console.log('Excel converted successfully');
  });
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
