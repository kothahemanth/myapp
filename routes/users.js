var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function (req,res) {
  res.send('Got a uSERS POST request')
})

router.put('/', function (req,res) {
  res.send('Got a USERS PUT request')})

router.delete('/', function (req,res) {
  res.send('Got a uSERS DELETE request')})

module.exports = router;
