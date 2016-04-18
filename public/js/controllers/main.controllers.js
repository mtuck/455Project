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
			API.getCategory($routeParams.category, function(category) {
				$rootScope.category = category;
			});
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
			// Retrieve program from API if not already loaded
			if(!$rootScope.program || $rootScope.program._id != $routeParams.program) {
				API.getProgram(
					$routeParams.category,
					$routeParams.department,
					$routeParams.program,
					function(category, department, program) {
						$scope.category = category;
						$scope.department = department;
						$scope.program = program;
					}
				);
			}
		}
	]
).controller
(
	'CourseCtrl',
	[
		'$scope',
		'$rootScope',
		'$routeParams',
		'API',
		function($scope, $rootScope, $routeParams, API)
		{
			if(!$rootScope.course || $rootScope.course._id != $routeParams.course) {
				API.getCourse($routeParams.course, function(course) {
					$scope.course = course;
				});
			}
		}
	]
).controller
(
	'CoursesCtrl',
	[
		'$scope',
		'$rootScope',
		'$routeParams',
		'API',
		function($scope, $rootScope, $routeParams, API)
		{
			API.listSubjects(function(subjects) {
				$rootScope.subjects = subjects;
			});
		}
	]
).controller
(
	'SubjectCtrl',
	[
		'$scope',
		'$rootScope',
		'$location',
		'$routeParams',
		'API',
		function($scope, $rootScope, $location, $routeParams, API)
		{
			
			/*
				Function: $scope.goToCourse
				Description: Navigate to a specified course and make it available to the $rootScope
				Input:
					course: course object
				Output:
				Created: Tyler Yasaka 04/17/2016
				Modified:
			*/
			$scope.goToCourse = function(course) {
				$rootScope.course = course;
				$location.path('/courses/course/' + course._id);
			}
			API.getSubject($routeParams.subject, function(subject, courses) {
				$scope.subject = subject;
				$scope.courses = courses;
			});
		}
	]
);
