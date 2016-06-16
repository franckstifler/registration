var faker = require('faker');
var st = require('../models/studentModel')
var  student = {};

module.exports = function random() {
	 for (var j=1; j<5; j++) {
	 	for (var i=0; i<25; i++) {
	 	student.name = faker.name.findName();
	 	student.surname = faker.name.lastName();
	 	student.sex = 'M';
	 	student.dob = faker.random.number(4);
	 	student.pob = faker.address.city() + ',' +faker.address.streetName();
	 	st.addStudent('form'+j, student, function(err, student){
	 		if (err) {
	 			console.log(err)
	 		}
	 		else {
	 			console.log('good');
	 		}
	 	});
	 }
	 }
} 