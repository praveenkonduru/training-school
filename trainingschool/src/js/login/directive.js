define(['./controller'],function(loginController){
	return function(){
		return {
			restrict: 'E',
			templateUrl: 'src/js/login/template.html',
			controller: loginController,
			controllerAs: 'loginCtrl'
		};
	}
})