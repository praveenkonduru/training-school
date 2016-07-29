define(['./directive'], function(trainings){
	angular.module('training-school.trainings', [])
		.directive('tsTrainings', trainings);
});