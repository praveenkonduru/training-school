define([], function(){
   var mainApp = angular.module("training-school-route", ['ngRoute']);
   mainApp.config(['$routeProvider', function($routeProvider) {
      $routeProvider.

      when('/login', {
         templateUrl: '/../src/js/login/login.htm'
      }).
      
      when('/registration', {
         templateUrl: '/../src/js/userRegistration/register.htm'
      }).

      when('/trainings', {
         templateUrl: '/../src/js/trainings/trainings.htm',
      }).
      
      otherwise({
         redirectTo: '/login'
      });
   }]);
   return mainApp;
});