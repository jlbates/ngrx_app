var ObjectID = require('bson').ObjectID;

//todo routes
module.exports = function (app, db) {

  app.post('/api/todos', function (req, res) {

    const id = new ObjectID();
    const todo = {
      _id: id,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status
    };

    // Add a TODO.
    db.collection('todo').insertOne(todo)
      .then(function (result) {
        res.send(result.ops[0]);
      })
      .catch(function (error) {
        res.send({'error': 'An error occured while creating the todo: ' + error.message});
      })
  });

  // Get all Todos
  app.get('/api/todos', function (req, res) {
    db.collection('todo').find().toArray()
      .then(function (result) {
        res.send(result);
      })

      .catch(function (error) {
        res.send({'error': 'An error occured pulling your todos: ' + error.message});
      })
  });

  // Delete TODO
  app.delete('/api/todos/:id', function (req, res) {
    const id = req.params.id;
    const details = {'_id': ObjectID(id)};
    db.collection('todo').deleteOne(details)
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        res.send({'error': 'An error has occurred ' + err});
      })
  });

  // Update TODO
  app.put('/api/todos/:id', function (req, res) {
    const id = req.params.id;
    const details = {'_id': ObjectID(id)};
    const todo = {
      title: req.body.title,
      description: req.body.description,
      date: new Date(),
      status: req.body.status
    };
    db.collection('todo').update(details, todo)
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        res.send({'error': 'An error has occurred ' + err});
      })
  });
};
