define(['./data','./categories'], function(data, categories){
	var controller = function(){
		var self = this;
		self.trainings = data;
		self.categories = categories;
		self.selectedCategory='All';
		self.categoryFilter = function(training){
			return training.category===self.selectedCategory || self.selectedCategory==='All';
		}
	};
	controller.$inject = [];
	return controller;
});