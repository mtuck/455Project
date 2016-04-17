/***																					***\

	Filename: catalog.routes.js
	Author: Tyler Yasaka

	Copyright (c) 2015 University of North Alabama
	
\***																					***/

(
	function(angular)
	{
		'use strict';

		angular.module('AppAdmin')
		.config
		(
			[
				'$routeProvider',
				function($routeProvider)
				{
					$routeProvider.when
					(
						'/catalog',
						{
							templateUrl: 'views/catalog/index.html',
							controller: 'Catalog-HomeCtrl'
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
