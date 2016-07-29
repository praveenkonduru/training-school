define(['./directive'], function(register){
	angular.module('training-school.registration', [])
		.directive('tsUserRegistration', register);
});