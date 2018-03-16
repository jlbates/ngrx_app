const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var db = require('./config/db');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MongoClient.connect(db.url)
  .then(function (database) {
    db = database.db("todos");
    require('./app/routes')(app, database);

    app.listen(port, function () {
      console.log('App server listening for requests on port ' + port);
    });

  })
  .catch(function (err) {
    return console.log(err);
  });
