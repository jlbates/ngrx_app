const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var dbConfig = require('./config/db.js');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
// Needed for parsing json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4302');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

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
