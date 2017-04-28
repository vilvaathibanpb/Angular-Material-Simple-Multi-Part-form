var app = angular.module('StarterApp', ['ngMaterial', 'ngMdIcons','ui.router']);

app.controller('AppCtrl', ['$scope', function($scope){
   $scope.arr = ["THE JOB","APPLICATION FORM","ADVERTISE","YOUR NETWORK","HIRING TEAM","ASSESSMENTS"];

}]);


app.config(function($stateProvider,$urlRouterProvider){
     $urlRouterProvider.otherwise('/1');
    $stateProvider.
    state('1',{
        url:'/1',
        templateUrl:'../views/form.html',
        controller:'AppCtrl'
    }).
    state('2',{
        url:'/2',
        templateUrl:'../views/form1.html',
        controller:'AppCtrl'
    }).
    state('3',{
        url:'/3',
        templateUrl:'../views/form2.html',
        controller:'AppCtrl'
    }).
    state('4',{
        url:'/4',
        templateUrl:'../views/form.html',
        controller:'AppCtrl'
    }).
    state('5',{
        url:'/5',
        templateUrl:'../views/form1.html',
        controller:'AppCtrl'
    }).
    state('6',{
        url:'/6',
        templateUrl:'../views/form2.html',
        controller:'AppCtrl'
    });
});

