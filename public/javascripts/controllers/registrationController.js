/**
 * Created by Tchowa Adonis on 12/03/2016.
 */
var myApp = angular.module('feesPayment');

myApp.controller('registrationController', ['$scope', '$http', '$location', function($scope, $http){
    console.log('Registration controller initialised');

    $scope.addStudent = function(){
        $http.post('/register', $scope.student).success(function(){
            window.location.href = '/';
        })
    }
}]);