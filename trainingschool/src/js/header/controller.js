define([], function(){
	var controller = function($location){
		this.signIn = function(){
			$location.path('#/login');
		}
	};

	controller.$inject = ['$location'];

	return controller;
});