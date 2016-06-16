/**
 * Created by Tchowa Adonis on 12/03/2016.
 */
var myApp = angular.module('feesPayment', ['ui.router']);

myApp.factory('localStorage', function(){
    var local = {};
    local.getLocalStorage = function (){
        try {
            if (!!window.localStorage) return window.localStorage;
        } catch(e)
        {
            return undefined;
        }
    };

    local.getAllItems = function(localStorage){
        var key, value, obj = {};
        for (var i=0; i < localStorage.length; i++){
            key = localStorage.key(i);
            value = localStorage.getItem(key);
            obj[key] = value;
        }
        return obj;
    };

    local.removeAllItems = function (localStorage){
        localStorage.clear();
    };


    local.removeItem = function (localStorage, key, item){
        var st = localStorage.getItem(key);
        if ( st == undefined)
            return undefined;
        console.log(st);
        st = st.split(',');
        console.log(st);
        for (var i=0; i< st.length; i++){
            if( st[i] == item){
                st.splice(i,1);
                break;
            }
        }
        console.log(st.join(','));
        return st.join(',');
    };
    return local;
});

/*
 myApp.config(function($routeProvider){
 $routeProvider.when('/registration', {
 controller: 'registrationController',
 templateUrl: 'registration.html'
 })
 .when('/payment', {
 controller: 'paymentController',
 templateUrl: 'payment.html'
 })
 .when('/payment/1', {
 controller: '',
 templateUrl: 'table.html'
 })
 .otherwise({
 redirect: '/'
 });
 }); */
//ngRoute doesn't work with nested views...

myApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('payment', {
            url: "/payment",
            templateUrl: "payment.html"
        })
        .state('payment.unregistered', {
            url: "/unregistered",
            templateUrl: "table.html",
            controller: 'payment'
        })
        .state('payment.form1Unregistered', {
            url: "/form1",
            templateUrl: "table.html",
            controller: 'form1Controller'
        })
        .state('payment.form2Unregistered', {
            url: "/form2",
            templateUrl: "table.html",
            controller: 'form2Controller'
        })
        .state('payment.form3Unregistered', {
            url: "/form3",
            templateUrl: "table.html",
            controller: 'form3Controller'
        })
        .state('payment.form4Unregistered', {
            url: "/form4",
            templateUrl: "table.html",
            controller: 'form4Controller'
        })
        .state('payment.form5Unregistered', {
            url: "/form5",
            templateUrl: "table.html",
            controller: 'form5Controller'
        })
        .state('payment.registered', {
            url: "/registered",
            templateUrl: "tableR.html"
        })
        .state('payment.form1Registered', {
            url: "/form1Registered",
            templateUrl: "tableR.html",
            controller: 'form1Controller'
        })
        .state('payment.form2Registered', {
            url: "/form2Registered",
            templateUrl: "tableR.html",
            controller: 'form2Controller'
        })
        .state('payment.form3Registered', {
            url: "/form3Registered",
            templateUrl: "tableR.html",
            controller: 'form3Controller'
        })
        .state('payment.form4Registered', {
            url: "/form4Registered",
            templateUrl: "tableR.html",
            controller: 'form4Controller'
        })
        .state('payment.form5Registered', {
            url: "/form5Registered",
            templateUrl: "tableR.html",
            controller: 'form5Controller'
        })
        .state('registration', {
            url: "/registration",
            templateUrl: "registration.html",
            controller: "registrationController"
        })
        .state('payment.verification', {
            url: "/verification",
            templateUrl: "verify.html",
            controller: "verificationController"
        })
});
