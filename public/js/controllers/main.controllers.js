/***																					***\

	Filename: main.controllers.js
	Author: CS455 Cyan

	Copyright (c) 2015 University of North Alabama

\***																					***/

angular.module('Catalog')
.controller
(
	'HomeCtrl',
	[
		'$scope',
		'$rootScope',
		'API',
		function($scope, $rootScope, API)
		{
			//
		}
	]
).controller
(
	'CategoryCtrl',
	[
		'$scope',
		'$rootScope',
		'$routeParams',
		'API',
		function($scope, $rootScope, $routeParams, API)
		{
			if(typeof $rootScope.category == 'undefined' || $rootScope.category._id != $routeParams.category) {
				API.getCategory($routeParams.category, function(category) {
					$rootScope.category = category;
				});	
			}
			
			/*
				Function: $scope.orderPrograms
				Description: Orders programs by type and then in alphabetical order of program name
				Input:
					programs: array of program objects
				Output:
					sorted array of program objects
				Created: Tyler Yasaka 04/17/2016
				Modified:
			*/
			$scope.orderPrograms = function(programs) {
				var types = {};
				for(var p in programs) {
					var program = programs[p];
					if(typeof types[program.type] == 'undefined') {
						types[program.type] = [];
					}
					types[program.type].push(program);
				}
				var results = [];
				if(types['major']) {
					results = results.concat(
						$rootScope.sortAlphabeticallyByProperty(types['major'], 'name')
					);
					delete types['major'];
				}
				if(types['minor']) {
					results = results.concat(
						$rootScope.sortAlphabeticallyByProperty(types['minor'], 'name')
					);
					delete types['minor']
				}
				if(types['certificate']) {
					results = results.concat(
						$rootScope.sortAlphabeticallyByProperty(types['certificate'], 'name')
					);
					delete types['certificate'];
				}
				for(var t in types) {
					results = results.concat(
						$rootScope.sortAlphabeticallyByProperty(types[t], 'name')
					);
				}
				return results;
			}
		}
	]
).controller
(
	'ProgramCtrl',
	[
		'$scope',
		'$rootScope',
		'$routeParams',
		'API',
		function($scope, $rootScope, $routeParams, API)
		{
			
			/*
				Function: calculateCredit
				Description: Calculate credit for each item in a requirement, as well as the total credit for that requirement
				Input:
					requirements: array of program requirement objects
				Output:
					credit for each item and requirement is stored in requirements object
				Created: Tyler Yasaka 04/17/2016
				Modified:
			*/
			var calculateCredit = function(requirements) {
				for(var r in requirements) {
					var requirement = $scope.program.requirements[r];
					var total = {
						min: 0,
						max: 0
					}
					for(var i in requirement.items) {
						var item = requirement.items[i];
						var subtotal = {
							min: 0,
							max: 0
						}
						if(item.separator == 'AND') {
							for(var c in item.courses) {
								var course = item.courses[c];
								subtotal.min += course.hours.min;
								subtotal.max += course.hours.max;
							}
						}
						else if (item.separator == 'OR' && item.courses.length) {
							subtotal.min = item.courses[0].hours.min;
							subtotal.max = item.courses[0].hours.max;
							for(var c = 1; c < item.courses.length; c++) {
								var course = item.courses[c];
								subtotal.min = Math.min(subtotal.min, course.hours.min);
								subtotal.max = Math.max(subtotal.max, course.hours.max);
							}
						}
						var credit;
						if(subtotal.min == subtotal.max) {
							credit = String(subtotal.min);
						}
						else {
							credit = subtotal.min + ' - ' + subtotal.max;
						}
						total.min += subtotal.min;
						total.max += subtotal.max;
						$scope.program.requirements[r].items[i].credit = credit;
					}
					var totalCredit;
					if(total.min == total.max) {
						totalCredit = String(total.min);
					}
					else {
						totalCredit = total.min + ' - ' + total.max;
					}
					$scope.program.requirements[r].credit = totalCredit;
				}
			}
			
			/*
				Function: findProgram
				Description: Finds the program specified in the url by its id
				Input:
					container: object which contains the array of programs
				Output:
					$scope.program is set to the found program
					calculateCredit is called on the program requirements
				Created: Tyler Yasaka 04/17/2016
				Modified:
			*/
			var findProgram = function(container) {
				for(var p in container.programs) {
					var program = container.programs[p];
					if(program._id == $routeParams.program) {
						$scope.program = program;
						calculateCredit($scope.program.requirements);
					}
				}
			}
			
			/*
				Function: findDepartment
				Description: Finds the department specified in the url by its id, if specified
				Input:
				Output:
					$scope.department is set to the found department, if specified
					calls findProgram after department is found if specified, immediately if not specified
				Created: Tyler Yasaka 04/17/2016
				Modified:
			*/
			var findDepartment = function() {
				// if department is specified, find it and then find the program within it
				if($routeParams.department) {
					for(var d in $rootScope.category.departments) {
						var department = $rootScope.category.departments[d];
						if(department._id == $routeParams.department) {
							$scope.department = department;
							findProgram(department);
						}
					}
				}
				else {
					// if department not specified, find program directly in category
					findProgram($rootScope.category);
				}
			}
			
			// Retrieve category from database if not already loaded
			if(typeof $rootScope.category == 'undefined' || $rootScope.category._id != $routeParams.category) {
				API.getCategory($routeParams.category, function(category) {
					$rootScope.category = category;
					// once category is loaded, find the specified department in the category
					findDepartment();
				});
			}
			else {
				// if category is already loaded, go ahead and find specified department
				findDepartment();
			}
		}
	]
);
