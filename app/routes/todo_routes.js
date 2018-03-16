//todo routes
module.exports = function (app, db) {
  app.post('/api/todos', function (req, res) {
    const todo = {
      _id: req.body._id,
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      status: req.body.status
    };
    console.log('LOGGING VALUES', db);
    db.collection('todo').insertOne(todo)
      .then(function (result) {
        res.send(result.ops[0]);
      })
      .catch(function (error) {
        res.send({'error': 'An error occured while creating the todo: ' + error.message});
      })
  });

  // app.get('/api/todos', function (req, res) {
  //   const todo = {
  //     _id: req.body._id,
  //     title: req.body.title,
  //     description: req.body.description,
  //     date: req.body.date,
  //     status: req.body.status
  //   };
  //
  //   db.collection('todos').insertOne(todo)
  //     .then(function (result) {
  //       res.send(result.ops[0]);
  //     })
  //     .catch(function (error) {
  //       res.send({ 'error': 'An error occured while creating the todo: ' + error.message });
  //     })
  // });


};
