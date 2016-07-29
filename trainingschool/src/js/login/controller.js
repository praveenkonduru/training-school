define([], function(){
	var loginController = function($location){
		this.signUp = function(){
			$location.path('/registration');
		};

		this.login = function(){
			$location.path('/trainings');
		}
	};

	loginController.$inject = ['$location'];

	return loginController;
})