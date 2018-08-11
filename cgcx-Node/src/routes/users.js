const express = require('express');
const router = express.Router();

//------------------------------------
router.get('/bl/authToken', function(req, res) {
  console.log('/bl/authToken')

  res.send({"data":'/bl/authToken'})
});
//------------------------------------
router.get('/bl/checkUser', function(req, res) {
  console.log('/bl/checkUser')

  res.send({"data":'/bl/authToken'})
});


module.exports = router;