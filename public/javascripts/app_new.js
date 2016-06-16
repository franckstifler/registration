/**
 * Created by Tchowa Adonis on 09/05/2016.
 */
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
        .state('unregistered', {
            url: "/:class",
            templateUrl: "table.html",
            controller: 'form1Controller'
        })
        .state('payment.registered', {
            url: "/registered",
            templateUrl: "tableR.html"
        })
        .state('payment.form1Registered', {
            url: "/registered/:class",
            templateUrl: "tableR.html",
            controller: 'form1Controller'
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
