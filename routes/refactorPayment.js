var express = require('express');
var router = express.Router();
var studentModel = require("../models/studentModel");
var _ = require('underscore');

var levels = ['form1', 'form2', 'form3', 'form4', 'form5'];
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


router.get('/payment/:level', function(req, res){
    console.log(req.query);
    var form = req.params.level;
    console.log(form);
    if (_.contains(levels, form)) {
        if (req.query.registered == 'false') {
        studentModel.getStudents(form, false, function(err, students){
            if (err){
                res.send(err);
            }
            res.json(filter(students));
        }, 100);
        }
        if (req.query.registered == 'true') {
            studentModel.getStudents(form, true, function(err, students){
                if (err){
                    res.send(err);
                }
                res.json(students);
            }, 100);
        }
    }
    else {
        res.json({error : "Invalid class."});
    }
});

router.put('/payment', function(req, res){
    var school = req.body;
    //console.log(school);
    var process = _.mapObject(school, function(level, key) {
        console.log(level);
        var tab = _.map(level, function(student) {
            console.log(student);
            if (_.contains(levels, key)) {
                try {
                    studentModel.studentPayment(key, student, function(err, student) {
                        if (err) {
                            res.json({Error : "There was a problem..."});
                            return 0;
                        }
                        else {
                            return 1;
                        }
                    });
                } catch (err) {
                    console.log(err);
                }
            } //end if
            else {
                return 0;
            }
        });
        return tab;
    })
    res.json(process);
});

router.post('/verification', function(req, res){
    var student = req.body;
    if (_.contains(levels, student["class"])){
        if (student["id"].length === 36) {
            studentModel.studentVerification(student["class"], student["id"], function(err, st){
                if (err) console.log(err);
                else {
                    res.send(st);
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