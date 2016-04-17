/***																					***\

	Filename: app.js
	Author: CS455 Cyan

	Copyright (c) 2015 University of North Alabama

\***																					***/

(
	function(angular)
	{
		'use strict';

		angular.module
		(
			'Catalog',
			[
				'ngRoute',
				'ngResource',
				'ui.bootstrap'
			]
		).run
		(
			[
				'$http',
				'$rootScope',
				'$location',
				'$resource',
				'API',
				function($http, $rootScope, $location, $resource, API)
				{
					// This runs when this angular app is first loaded.
					
					$rootScope.categories = [];
					
					API.listCategories(function(categories){
						$rootScope.categories = categories;
					});
					
					/*
						Function: $rootScope.isActivePath
						Description: Tells whether or not the given path is active
						Input:
							path: path to check (String)
						Output:
							whether path is active (Boolean)
						Created: Tyler Yasaka 04/17/2016
						Modified:
					*/
					$rootScope.isActivePath = function(path) {
						return ($location.path().substr(0, path.length) === path);
					}
					
					/*
						Function: $rootScope.programTitle
						Description: Creates a program title based on its name and type (e.g. 'major')
						Input:
							program: program object
						Output:
							title (String)
						Created: Tyler Yasaka 04/17/2016
						Modified:
					*/
					$rootScope.programTitle = function(program) {
						var part1 = '';
						switch(program.type) {
							case 'major':
								part1 = 'Major in ';
								break;
							case 'minor':
								part1 = 'Minor in ';
								break;
							case 'certificate':
								part1 = 'Certificate in ';
								break;
						}
						return part1 + program.name;
					}
					
					/*
						Function: $rootScope.sortAlphabeticallyByProperty
						Description: Orders objects of an array in alphabetical order of a property
						Input:
							arr: array to sort
							property: property to sort by
						Output:
							sorted array
						Created: Tyler Yasaka 04/17/2016
						Modified:
					*/
					$rootScope.sortAlphabeticallyByProperty = function(arr, property) {
						return arr.sort(function(a, b){
							var propertyA=a[property].toLowerCase()
							var propertyB=b[property].toLowerCase();
							if (propertyA < propertyB) //sort string ascending
								return -1;
							if (propertyA > propertyB)
								return 1;
							return 0; //default return value (no sorting)
						});
					}
				}
			]
		);

	}
)
(
	angular
);
