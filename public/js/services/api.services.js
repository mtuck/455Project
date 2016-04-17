/***																					***\

	Filename: api.services.js
	Author: CS455 Cyan

	Copyright (c) 2015 University of North Alabama

\***																					***/


angular.module('Catalog')
.service
(
	'API',
	function() {
		
		this.listCategories = function(callback) {
			var categories = [
				{
					"_id": "1",
					"name": "Interdisciplinary Studies",
				},
				{
					"_id": "2",
					"name": "College of Arts and Sciences",
				},
				{
					"_id": "3",
					"name": "College of Business",
				},
				{
					"_id": "4",
					"name": "College of Education and Human Sciences",
				},
				{
					"_id": "5",
					"name": "College of Nursing",
				}
			];
			callback(categories);
			
			this.getCategory = function(id, callback) {
				console.log('getCategory')
				switch(id) {
					case "1":
						callback({
							"_id": "1",
							"name": "Interdisciplinary Studies",
							"description": "a description",
						});
						break;
					case "2":
						callback({
							"_id": "2",
							"name": "College of Arts and Sciences",
							"description": "a description",
						});
						break;
					case "3":
						callback({
							"_id": "3",
							"name": "College of Business",
							"description": "a description",
							departments: [
								{
									"_id": "10",
									"name": "Accounting and Business Law",
									"description": "a description",
									"programs": [
										{
											"_id": "31",
											"name": "Accounting",
											"type": "minor",
											"description": "a description",
											"requirements": []
										}
									]
								},
								{
									"_id": "11",
									"name": "Computer Science and Information Systems",
									"description": "a description",
									"programs": [
										{
											"_id": "32",
											"name": "Computer Science",
											"type": "major",
											"description": "a description",
											"requirements": [
												{
													"name": "Core Requirements",
													"_id": "571339a3145ab8b471163da0",
													"items": [
														{
															"separator": "OR",
															"_id": "571339a3145ab8b471163da2",
															"courses": [
																{
																	"_id": "571339a2145ab8b471163d96",
																	"title": "Artificial Intelligence",
																	"number": "470",
																	"description": "Robots and stuff...",
																	"hours": {
																		min: 3,
																		max: 3
																	},
																	"subject": {
																		"_id": "571339a2145ab8b471163d92",
																		"name": "Computer Science",
																		"abbreviation": "CS",
																		"__v": 0
																	},
																	"__v": 0,
																	"offerings": []
																},
																{
																	"_id": "571339a2145ab8b471163d97",
																	"title": "Programming Languages",
																	"number": "410W",
																	"description": "Fortran...",
																	"hours": {
																		min: 3,
																		max: 3
																	},
																	"subject": {
																		"_id": "571339a2145ab8b471163d92",
																		"name": "Computer Science",
																		"abbreviation": "CS",
																		"__v": 0
																	},
																	"__v": 0,
																	"offerings": []
																}
															]
														},
														{
															"separator": "AND",
															"_id": "571339a3145ab8b471163da3",
															"courses": [
																{
																	"_id": "571339a2145ab8b471163d97",
																	"title": "Calculus I",
																	"number": "127",
																	"description": "Integrals and Derivatives",
																	"hours": {
																		min: 4,
																		max: 5
																	},
																	"subject": {
																		"_id": "571339a2145ab8b471163d93",
																		"name": "Math",
																		"abbreviation": "MA",
																		"__v": 0
																	},
																	"__v": 0,
																	"offerings": []
																}
															]
														}
													]
												},
												{
													"name": "Other requirements",
													"_id": "571339a3145ab8b471163da3",
													"items": [
														{
															"separator": "OR",
															"_id": "571339a3145ab8b471163da2",
															"courses": [
																{
																	"_id": "571339a2145ab8b471163d97",
																	"title": "Software Engineering",
																	"number": "455",
																	"description": "Test test test",
																	"hours": {
																		min: 3,
																		max: 3
																	},
																	"subject": {
																		"_id": "571339a2145ab8b471163d92",
																		"name": "Computer Science",
																		"abbreviation": "CS",
																		"__v": 0
																	},
																	"__v": 0,
																	"offerings": []
																}
															]
														}
													]
												}
											]
										},
										{
											"_id": "33",
											"name": "Human Computer Interaction/User Experience (HCI/UX)",
											"type": "minor",
											"description": "a description",
											"requirements": []
										}
									]
								},
								{
									"_id": "12",
									"name": "Economics and Finance",
									"description": "a description",
									"programs": [
										{
											"_id": "34",
											"name": "Economics",
											"type": "minor",
											"description": "a description",
											"requirements": []
										}
									]
								},
								{
									"_id": "13",
									"name": "Management and Marketing",
									"description": "a description",
									"programs": [
										{
											"_id": "35",
											"name": "Human Resource Management",
											"type": "minor",
											"description": "a description",
											"requirements": []
										},
										{
											"_id": "36",
											"name": "Project Management",
											"type": "minor",
											"description": "a description",
											"requirements": []
										},
										{
											"_id": "37",
											"name": "Marketing Communications and Technology",
											"type": "minor",
											"description": "a description",
											"requirements": []
										}
									]
								}
							],
							programs: [
								{
									"_id": "38",
									"name": "Underwater Basket Weaving",
									"type": "certificate",
									"description": "a description",
									"requirements": []
								}
							]
						});
						break;
					case "4":
						callback({
							"_id": "4",
							"name": "College of Education and Human Sciences",
							"description": "a description",
						});
						break;
					case "5":
						callback({
							"_id": "5",
							"name": "College of Nursing",
							"description": "a description",
						});
						break;
				}
			};
		}
	}
);