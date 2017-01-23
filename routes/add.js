var express = require('express')
var router = express.Router()
var result = 0;

router.post('/', function(req, res) {
  result = Number(req.body.value1) + Number(req.body.value2);
  res.send(String(result));
  // console.log(req.body);
})

module.exports = router;
