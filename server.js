var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var result = 0;


app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


app.post('/add', function(req, res) {
  result = Number(req.body.value1) + Number(req.body.value2);
  res.sendStatus(200);
})
app.post('/subtract', function(req, res) {
  result = Number(req.body.value1) - Number(req.body.value2);
  res.sendStatus(200);
})
app.post('/multiply', function(req, res) {
  result = Number(req.body.value1) * Number(req.body.value2);
  res.sendStatus(200);
})
app.post('/divide', function(req, res) {
  result = Number(req.body.value1) / Number(req.body.value2);
  res.sendStatus(200);
})
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

app.get('/result', function(req, res) {
  //Returns the result on request
  // console.log(result);
  res.send(String(result));

});







app.listen(3000);
