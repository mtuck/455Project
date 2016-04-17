/***																					***\

	Filename: routes.js
	Author: CS455 Cyan

	Copyright (c) 2015 University of North Alabama
	
\***																					***/

(
	function(angular)
	{
		'use strict';

		angular.module('Catalog')
		.config
		(
			[
				'$routeProvider',
				function($routeProvider)
				{
					$routeProvider.when
					(
						'/',
						{
							templateUrl: 'views/home.html',
							controller: 'HomeCtrl'
						}
					).when
					(
						'/about',
						{
							templateUrl: 'views/home.html',
							controller: 'HomeCtrl'
						}
					).when
					(
						'/general_education_req',
						{
							templateUrl: 'views/general_education_req.html',
							controller: 'HomeCtrl'
						}
					).when
					(
						'/programs/category/:category',
						{
							templateUrl: 'views/programs/category.html',
							controller: 'CategoryCtrl'
						}
					).when
					(
						'/programs/category/:category/program/:program',
						{
							templateUrl: 'views/programs/program.html',
							controller: 'ProgramCtrl'
						}
					).when
					(
						'/programs/category/:category/department/:department/program/:program',
						{
							templateUrl: 'views/programs/program.html',
							controller: 'ProgramCtrl'
						}
					);
				}
			]
		);

	}
)
(
	angular
);
