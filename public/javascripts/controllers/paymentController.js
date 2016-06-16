/**
 * Created by Tchowa Adonis on 12/03/2016.
 */
var myApp = angular.module('feesPayment');
var db;

myApp.controller('form1Controller', ['$scope', '$http', '$location', 'localStorage', function($scope, $http, $location, localStorage){
    if ($location.$$url == '/payment/form1'){
        $scope.getStudents = function(){
            $http.get('/fees/payment/form1', { params : {"registered" : false }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };

        $scope.studentChecker = function(student, checked) {
            db = localStorage.getLocalStorage();
            var result = eval("$scope."+checked);
            if (result == false || result == undefined){
                eval("$scope."+checked+" = true");
                console.log('checked');
                var storedValues;
                if(db.getItem('form1') != null){
                    storedValues = db.getItem("form1") + student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form1", storedValues);
                }
                else {
                    storedValues = student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form1", storedValues);
                }
            }
            else {
                db.setItem("form1",localStorage.removeItem(db, 'form1', student.currentTarget.getAttribute("id")));
                eval("$scope."+checked+" = false");
                console.log('unchecked')
            }

        };
    }
    else if ($location.$$url == '/payment/form1Registered') {
        $scope.getRegisteredStudents = function(){
            $http.get('/fees/payment/form1', { params : {"registered" : true }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };
    }

}]);

myApp.controller('form2Controller', ['$scope', '$http', '$location', 'localStorage', function($scope, $http, $location, localStorage){
    if ($location.$$url == '/payment/form2'){
        $scope.getStudents = function(){
            $http.get('/fees/payment/form2', { params : {"registered" : false }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };

        $scope.studentChecker = function(student, checked) {
            db = localStorage.getLocalStorage();
            var result = eval("$scope."+checked);
            if (result == false || result == undefined){
                eval("$scope."+checked+" = true");
                console.log('checked');
                var storedValues;
                if(db.getItem('form2') != null){
                    storedValues = db.getItem("form2") + student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form2", storedValues);
                }
                else {
                    storedValues = student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form2", storedValues);
                }
            }
            else {
                db.setItem("form2",localStorage.removeItem(db, 'form2', student.currentTarget.getAttribute("id")));
                eval("$scope."+checked+" = false");
                console.log('unchecked')
            }

        };
    }
    else if ($location.$$url == '/payment/form2Registered') {
        $scope.getRegisteredStudents = function(){
            $http.get('/fees/payment/form2', { params : {"registered" : true }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };
    }

}]);

myApp.controller('form3Controller', ['$scope', '$http', '$location', 'localStorage', function($scope, $http, $location, localStorage){
    if ($location.$$url == '/payment/form3'){
        $scope.getStudents = function(){
            $http.get('/fees/payment/form3', { params : {"registered" : false }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };

        $scope.studentChecker = function(student, checked) {
            db = localStorage.getLocalStorage();
            var result = eval("$scope."+checked);
            if (result == false || result == undefined){
                eval("$scope."+checked+" = true");
                console.log('checked');
                var storedValues;
                if(db.getItem('form3') != null){
                    storedValues = db.getItem("form3") + student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form3", storedValues);
                }
                else {
                    storedValues = student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form3", storedValues);
                }
            }
            else {
                db.setItem("form3",localStorage.removeItem(db, 'form3', student.currentTarget.getAttribute("id")));
                eval("$scope."+checked+" = false");
                console.log('unchecked')
            }

        };
    }
    else if ($location.$$url == '/payment/form3Registered') {
        $scope.getRegisteredStudents = function(){
            $http.get('/fees/payment/form3', { params : {"registered" : true }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };
    }

}]);

myApp.controller('form4Controller', ['$scope', '$http', '$location', 'localStorage', function($scope, $http, $location, localStorage){
    if ($location.$$url == '/payment/form4'){
        $scope.getStudents = function(){
            $http.get('/fees/payment/form4', { params : {"registered" : false }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };

        $scope.studentChecker = function(student, checked) {
            db = localStorage.getLocalStorage();
            var result = eval("$scope."+checked);
            if (result == false || result == undefined){
                eval("$scope."+checked+" = true");
                console.log('checked');
                var storedValues;
                if(db.getItem('form4') != null){
                    storedValues = db.getItem("form4") + student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form4", storedValues);
                }
                else {
                    storedValues = student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form4", storedValues);
                }
            }
            else {
                db.setItem("form4",localStorage.removeItem(db, 'form4', student.currentTarget.getAttribute("id")));
                eval("$scope."+checked+" = false");
                console.log('unchecked')
            }

        };
    }
    else if ($location.$$url == '/payment/form4Registered') {
        $scope.getRegisteredStudents = function(){
            $http.get('/fees/payment/form4', { params : {"registered" : true }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };
    }

}]);

myApp.controller('form5Controller', ['$scope', '$http', '$location', 'localStorage', function($scope, $http, $location, localStorage){
    if ($location.$$url == '/payment/form5'){
        $scope.getStudents = function(){
            $http.get('/fees/payment/form5', { params : {"registered" : false }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };

        $scope.studentChecker = function(student, checked) {
            db = localStorage.getLocalStorage();
            var result = eval("$scope."+checked);
            if (result == false || result == undefined){
                eval("$scope."+checked+" = true");
                console.log('checked');
                var storedValues;
                if(db.getItem('form5') != null){
                    storedValues = db.getItem("form5") + student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form5", storedValues);
                }
                else {
                    storedValues = student.currentTarget.getAttribute("id") + ',';
                    db.setItem("form5", storedValues);
                }
            }
            else {
                db.setItem("form5",localStorage.removeItem(db, 'form5', student.currentTarget.getAttribute("id")));
                eval("$scope."+checked+" = false");
                console.log('unchecked')
            }

        };
    }
    else if ($location.$$url == '/payment/form5Registered') {
        $scope.getRegisteredStudents = function(){
            $http.get('/fees/payment/form5', { params : {"registered" : true }}).success(function(response){
                $scope.stats = response.pop();
                $scope.students = response;
            });
        };
    }

}]);

myApp.controller('payment', ['$scope', '$http', 'localStorage', '$location', function($scope, $http, localStorage, $location){
    $scope.paymentConfirmation = function (){
        var db = localStorage.getLocalStorage();
        var school = localStorage.getAllItems(db);
        //format for server
        console.log(school);
        var obj = {};
        var result = _.map(school, function(level, key){
            var st = level.split(',');
            st.pop();
            obj[key] =  st;
            console.log(obj)
        });
        console.log(result);
        localStorage.removeAllItems(db);
       $http.put('/fees/payment', obj).success(function(response){
           console.log(response);
       });
        window.location.reload()
    };
    $scope.studentInfos = function($event, a) {
        $event.preventDefault();
        var leve = $location.$$url;
        //contains the level of the student
        leve = leve.split('/')[2];
        var adonis = {};
        $http.get('/student', { params: { id: a, level: leve }}).success(function(response){
            $('#studentName').text(response.name + " " +response.surname);
            $('#studentSex').text(response.sex);
            $('#studentPob').text(response.pob);
            $('#studentRegistered').text(response.registered);
            setTimeout(function(){
                $('#studentInfos').modal();
            }, 200);
        });
    };
}]);

myApp.controller('verificationController', ['$scope', '$http', function($scope, $http){
    $scope.getVerification = function(){
        $http.post('/fees/verification', $scope.student).success(function(response){
            var st = response[0];
            if ( st === undefined) {
                st = {
                    name : "No student found!",
                    sex : "No student found!"
                };
                $scope.studentRegistered = st;
            }
            else {
                $scope.studentRegistered = st;
            }
            setTimeout(function(){
                $('#myModal').modal();
            },200);
        })
    }
}]);