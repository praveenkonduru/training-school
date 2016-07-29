define(['./controller'], function(controller){
	return function(){ 
		return {
			restrict: "E",
			templateUrl: "src/js/header/template.html",
			controller:controller,
			controllerAs: 'loginCtrl'
		};
	};
});