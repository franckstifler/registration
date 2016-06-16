/**
 * Created by Tchowa Adonis on 23/03/2016.
 */
var express = require('express');
var router = express.Router();
var studentModel = require("../models/studentModel");
var _ = require('underscore');

var level = ['form1', 'form2', 'form3', 'form4', 'form5'];
function filter(st) {
    var stud;
    var result = _.map(st, function(student) {
        stud = _.pick(student, ['name', 'surname', '_id']);
        return stud;
    });
    result.push({'unregistered': _.size(result),
        'registered' : _.size(st) - _.size(result)
    });
    return result;
}


router.get('/payment1', function(req, res){
    studentModel.studentRegistered(level[0],function(err, students){
        if (err){
            res.send(err);
        }
        res.json(filter(students));
    }, 100);
});

router.get('/payment2', function(req, res){
    studentModel.studentRegistered(level[1], function(err, students){
        if (err) {
            res.send(err);
        }
        console.log(filter(students));
        res.json(filter(students));
    }, 100);
});

router.get('/payment3', function(req, res){
    studentModel.studentRegistered(level[2], function(err, students){
        if (err){
            res.send(err);
        }
        res.json(filter(students));
    }, 100);
});

router.get('/payment4', function(req, res){
    studentModel.studentRegistered(level[3], function(err, students){
        if (err){
            console.log(err);
            res.send(err);
        }
        res.json(filter(students));
    });
});

router.get('/payment5', function(req, res){
    studentModel.studentRegistered(level[4], function(err, students){
        if (err){
            res.send(err);
        }
        console.log(filter(students));
        res.json(filter(students));
    });
});


module.exports = router;