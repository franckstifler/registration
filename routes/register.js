var express = require('express');
var router = express.Router();
var studentModel = require('../models/studentModel');
var _ = require('underscore');

var level = ['form1', 'form2', 'form3', 'form4', 'form5'];
/*
router.get('/register', function(req, res){
    res.render('studentRegistration');
});
*/
router.get('/register/:id', function(req, res){
    Student.getStudentByid(req.params.id, function(err, student){
        if (err)
            res.send(err);
        res.json(student);
    })
});

router.post('/register', function(req, res){
    var student = req.body;
    console.log(student);
    var cl = student.class;
    if (_.contains(level, cl)) {
        studentModel.addStudent(cl, student, function(err, student){
            if (err) console.log(err);
            else {
                console.log('registrarion successfull!');
                res.json(student);
            }
        })
    }
});

module.exports = router;
