var express = require('express');
var router = express.Router();
var studentModel = require('../models/studentModel');
var _ = require('underscore');

var levels = ['form1', 'form2', 'form3', 'form4', 'form5'];
/* GET users listing. */
router.get('/', function(req, res) {
  var id = req.query.id;
  var level = req.query.level;
  console.log(req.query);
  if (_.contains(levels, level)) {
  	studentModel.getStudentById(level, id, function(err, student){
  		if (err) {
  			res.json(err);
  		}
  		else {
  			res.json(student);
  		}
  	});
  }
  else {
  	res.json({error : "Incorrect Parameters"});
  }


});

module.exports = router;
