var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var add = require('./routes/add')
var subtract = require('./routes/subtract')
var multiply = require('./routes/multiply')
var divide = require('./routes/divide')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/result', function(req, res) {
  //Returns the result on request
  res.send(String(result));

});

app.listen(3000);

// app.get('/add', function(req, res) {
//   console.log(req.body);
//   result = Number(req.body.value1) + Number(req.body.value2);
//   res.send(String(result));
// })
// app.post('/subtract', function(req, res) {
//   result = Number(req.body.value1) - Number(req.body.value2);
//   res.sendStatus(200);
// })
// app.post('/multiply', function(req, res) {
//   result = Number(req.body.value1) * Number(req.body.value2);
//   res.sendStatus(200);
// })
// app.post('/divide', function(req, res) {
//   result = Number(req.body.value1) / Number(req.body.value2);
//   res.sendStatus(200);
// })
//
// app.post('/compute', function(req, res) {
  // console.log(req.body);
  //Determines which operator was selected
  //Then performs the desired operation on the
  //provided value1 and value2 storing the result in 'result'
//   switch(req.body.valueOperator) {
//     case "add":
//       console.log("add");
//       result = Number(req.body.value1) + Number(req.body.value2);
//       // console.log(result);
//       res.sendStatus(200);
//       break;
//     case "subtract":
//       console.log("subtract");
//       result = Number(req.body.value1) - Number(req.body.value2);
//       res.sendStatus(200);
//       break;
//     case "multiply":
//       console.log("multiply");
//       result = Number(req.body.value1) * Number(req.body.value2);
//       res.sendStatus(200);
//       break;
//     case "divide":
//       console.log("divide");
//       result = Number(req.body.value1) / Number(req.body.value2);
//       res.sendStatus(200);
//       break;
//   }
// });
