define(['./directive'], function(login){
	angular.module('training-school.login', [])
		.directive('tsUserLogin', login);
});