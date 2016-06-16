/**
 * Created by Tchowa Adonis on 04/03/2016.
 */
var mongoose = require('mongoose');
var uuid = require('node-uuid');

var studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String
    },
    sex: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    pob: {
        type: String,
        required: true
    },
    registered: {
        type : String,
        default: 'XXXXX'
    },
    registrationId: {
        type: String,
        unique: true
    }


});

//var studentSchemas = module.exports = studentSchema;

var form1 = mongoose.model('form1', studentSchema);
var form2 = mongoose.model('form2', studentSchema);
var form3 = mongoose.model('form3', studentSchema);
var form4 = mongoose.model('form4', studentSchema);

//We create this object to avoid using eval
obj = {
    'form1' : form1,
     'form2' : form2,
     'form3' : form3,
     'form4' : form4
};

module.exports.addStudent = function(level, student, callback){
    //if (student.dob.length !== 8)
     //   callback(err, null);
    var add = {
        name: student.name,
        surname: student.surname,
        sex: student.sex,
        dob: student.dob,
        pob: student.pob
    };

    obj[level].create(add, callback);
};

module.exports.getStudents = function(level, reg, callback, limit){
    console.log(reg);
    var queryT = {registered : 'XXXXX'};
    var queryF = { registered : { $ne : 'XXXXX' } };
    if (reg) obj[level].find(queryF, callback).limit(limit).sort([['name', 'ascending']]).exec();
    else obj[level].find(queryT, callback).limit(limit).sort([['name', 'ascending']]).exec();
};

//Get single student

module.exports.getStudentById = function(level, id, callback){
    obj[level].findById(id, callback);
};

//update student payment

module.exports.studentPayment = function(level, id, callback){
    var query = {'_id' : id};
    var update = {
        registrationId : uuid.v4(),
        registered : "Yes"
    };
    obj[level].findOneAndUpdate(query, update, callback);
};

module.exports.studentVerification = function(level, id, callback){
    query = {registrationId : id};
    obj[level].findOne(query, callback);
};
