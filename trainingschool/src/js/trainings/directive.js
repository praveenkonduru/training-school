define(['./controller'],function(controller){
	return function(){
		return {
			restrict: 'E',
			templateUrl: 'src/js/trainings/template.html',
			controller: controller,
			controllerAs: 'trainingsCtrl'
		};
	};
});