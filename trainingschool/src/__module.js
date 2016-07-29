define(['trainingschool/header/__module',
		'trainingschool/footer/__module',
		'trainingschool/userRegistration/__module',
		'trainingschool/login/__module',
		'trainingschool/trainings/__module',
		'./config/route'
		], function(){
	angular.module('training-school-app', ['training-school.header', 'training-school.footer', 
										   'training-school.registration', 'training-school.login',
										   'training-school.trainings','training-school-route']);
	angular.bootstrap(document.body, ['training-school-app']);
});