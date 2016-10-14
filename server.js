//install MongoDB on C9: https://community.c9.io/t/setting-up-mongodb/1717
var express = require('express');
var mongoose = require('mongoose');
var xUser=require ('./model/urlmodel');

var app = express();
mongoose.connect('mongodb://localhost/my_database');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/showall/', function (req, res) {
  xUser.find(function (err, data) {
    if (err) return console.error(err);
    res.send(data);
    console.log(data);
  })
});

app.get('/addnew/', function (req, res) {
  var doc = {
    name: "Shawn Wollenberg4",
    username: "shawnwollenberg4",
    password: "test"
  }
  var user= new xUser(doc);
  user.save(function(err){
    if (err) return console.error(err);
    res.send("new user added" + doc);
  })
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});