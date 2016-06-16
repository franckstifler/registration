var express = require('express');
var router = express.Router();
var studentModel = require("../models/studentModel");
var _ = require('underscore');

var level = ['form1', 'form2', 'form3', 'form4', 'form5'];
function filter(st) {
    var stud;
    var result = _.map(st, function(student) {
        stud = _.pick(student, ['name', 'sex', 'surname', '_id']);
        return stud;
    });
    result.push({'unregistered': _.size(result),
        'registered' : _.size(st) - _.size(result)
    });
    return result;
}


router.post('/payment1', function(req, res){
    if (req.body.registered == false) {
        studentModel.getStudents(level[0], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
    if (req.body.registered == true) {
        studentModel.getStudents(level[0], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
});

router.post('/payment2', function(req, res){
    if (req.body.registered == false) {
        studentModel.getStudents(level[1], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
    if (req.body.registered == true) {
        studentModel.getStudents(level[1], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
});

router.post('/payment3', function(req, res){
    if (req.body.registered == false) {
        studentModel.getStudents(level[2], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
    if (req.body.registered == true) {
        studentModel.getStudents(level[2], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
});

router.post('/payment4', function(req, res){
    if (req.body.registered == false) {
        studentModel.getStudents(level[3], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
    if (req.body.registered == true) {
        studentModel.getStudents(level[3], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
});

router.post('/payment5', function(req, res){
    if (req.body.registered == false) {
        studentModel.getStudents(level[4], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
    if (req.body.registered == true) {
        studentModel.getStudents(level[4], req.body.registered, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
    }
});

router.put('/payment', function(req, res){
    function callback(err, student){
        if (err) {
            console.log(err);
        } else {
            console.log('student registered!');
        }
    }
    var school = req.body;
    //console.log(school);
    var result = _.map(school, function(students){
        var obj = {};
        console.log(students);
        var form = _.map(students, function(student, key){
            console.log(student);
            //We verify the level is valid
            if (_.contains(level, key)){
                var st = _.map(student, function(id){
                    try {
                        studentModel.studentPayment(key, id, callback);
                    } catch (err) {
                        console.log(err);
                    }
                });
                return obj[key] = st;
            }
            else return 0;
        });
        return obj;
    });
    console.log(result);
});

router.post('/verification', function(req, res){
    var student = req.body;
    if (_.contains(level, student["class"])){
        if (student["id"].length == 24) {
            studentModel.studentVerification(student["class"], student["id"], function(err, st){
                if (err) console.log(err);
                else {
                    res.json(st);
                }
            })
        }
        else {
            res.json({"error": "Invalid registration ID!"})
        }
    }
    else res.json({"error": "invalid class"});
});

module.exports = router;