var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

router.get('/', function (req,res) {
  res.send('Hello World!')
})

router.post('/', function (req,res) {
  res.send('Got a POST request')
})

router.put('/', function (req,res) {
  res.send('Got a PUT request')})

router.delete('/', function (req,res) {
  res.send('Got a DELETE request')})

module.exports = router;
