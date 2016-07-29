define(['./categories'], function(category){
	return [{
		name:'AngularJs',
		date:'24-Nov-2016',
		participants:30,
		category:category.javascript,
		duration:5,
		venue: {
			street:'2800 W Higgins',
			city: 'Chicago',
			zip:'60169'
		}
	},	
	{
		name:'Hive',
		date:'27-Sep-2016',
		participants:35,
		category:category.bigData,
		duration:5,
		venue: {
			street:'945 Park Ave',
			city: 'Chicago',
			zip:'60195'
		}
	},
	{
		name:'Typescript',
		date:'09-Jun-2016',
		participants:50,
		category:category.javascript,
		duration:8,
		venue: {
			street:'1950 Hassell Road',
			city: 'Chicago',
			zip:'60169'
		}
	},
	{
		name:'RabbitMQ',
		date:'24-Nov-2016',
		participants:50,
		category:category.queue,
		duration:10,
		venue: {
			street:'1234 Valley Lake Drive',
			city: 'Chicago',
			zip:'60169'
		}
	},
	{
		name:'Sqoop',
		date:'01-Dec-2016',
		participants:40,
		category:category.bigData,
		duration:4,
		venue: {
			street:'1950 Hassell Road',
			city: 'Chicago',
			zip:'60169'
		}
	},
	{
		name:'KnockoutJs',
		date:'21-Jul-2016',
		participants:10,
		category:category.javascript,
		duration:8,
		venue: {
			street:'2800 W Higgins',
			city: 'Chicago',
			zip:'60169'
		}
	},
	{
		name:'NServiceBus',
		date:'15-Aug-2016',
		participants:20,
		category:category.csharp,
		duration:5,
		venue: {
			street:'1950 Hassell Rd',
			city: 'Chicago',
			zip:'60169'
		}
	}];
});