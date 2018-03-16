const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var dbConfig = require('./config/db.js');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Connect to the mongo db hosted on myLab.
MongoClient.connect(dbConfig.url)
  .then(function (client) {

    const db = client.db('todos');
    db.collection('todo');
    //Passes the database instance to /app/routes/index.js
    require('./app/routes')(app, db);

    app.listen(port, function () {
      console.log('App server listening for requests on port ' + port);
    });

  })
  .catch(function (err) {
    return console.log(err);
  });
