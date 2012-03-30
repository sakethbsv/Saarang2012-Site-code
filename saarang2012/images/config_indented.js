var config = {

	"pages": [

		{

			"id": "page_home",

			"title": "Home Page",

			"name": "Home Page",

			"boxes": [

				{

					"id": "box_home_spotlight",

					"gridText": "Spotlight",

					"left": "150px",

					"animationInStartPosition": {

						"top": "125px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "125px",

						"left": "850px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 1,

					"height": "125px",

					"name": "spotlight",

					"top": "125px"

				}, {

					"id": "box_home_events",

					"gridText": "Events",

					"left": "475px",

					"animationInStartPosition": {

						"top": "125px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "125px",

						"left": "850px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"type": "box_page_switch",

					"width": "125px",

					"pageSwitchIndex": 4,

					"height": "125px",

					"name": "events title",

					"top": "75px"

				}, {

					"id": "box_home_hospitality",

					"gridText": "Hospitality",

					"left": "150px",

					"animationInStartPosition": {

						"top": "400px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "400px",

						"left": "850px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_page_switch",

					"width": "125px",

					"pageSwitchIndex": 2,

					"height": "125px",

					"name": "hospi",

					"top": "400px"

				}, {

					"id": "box_home_spons",

					"gridText": "Sponsors & Media",

					"left": "475px",

					"animationInStartPosition": {

						"top": "350px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "350px",

						"left": "850px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_page_switch",

					"width": "125px",

					"pageSwitchIndex": 3,

					"height": "125px",

					"name": "spons",

					"top": "350px"

				}, {

					"id": "box_home_proshow",

					"gridText": "Pro Shows",

					"left": "600px",

					"animationInStartPosition": {

						"top": "475px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "475px",

						"left": "850px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "125px",

					"pageSwitchIndex": 4,

					"height": "125px",

					"name": "proshows",

					"top": "475px"

				}, {

					"id": "box_home_gallery",

					"gallery": [

						"images/mainPageSlideshow/rock-show.jpg", "images/mainPageSlideshow/popular-night.jpg", "images/mainPageSlideshow/lecdems.jpg", "images/mainPageSlideshow/classical-night.jpg", "images/mainPageSlideshow/choreo-night.jpg", "images/mainPageSlideshow/saarang-village.jpg", "images/mainPageSlideshow/tarang-decibels.jpg", "images/mainPageSlideshow/wcs-asaf-avidan.jpg", "images/mainPageSlideshow/panache.jpg", "images/mainPageSlideshow/wcs-mime.jpg"

					],

					"left": "275px",

					"animationInStartPosition": {

						"top": "200px",

						"left": "0px"

					},

					"width": "200px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"type": "box_gallery",

					"animationOutEndPosition": {

						"top": "200px",

						"left": "850px"

					},

					"animationOutDelay": 0,

					"height": "200px",

					"name": "gallery",

					"top": "200px"

				}

			]

		}, {

			"id": "page_spotlight",

			"title": "Spotlight Page",

			"name": "Spotlight Page",

			"parentIndex": 0,

			"boxes": [

				{

					"id": "box_spotlight_close",

					"left": "100px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "75px"

				}, {

					"id": "box_spotlight_title",

					"gridText": "Spotlight",

					"left": "150px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "100px",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"type": "box_static",

					"color": 0,

					"animationInDuration": 500,

					"animationInDelay": 0,

					"animationOutDelay": 0,

					"height": "100px",

					"name": "spolight title",

					"top": "125px"

				}, {

					"id": "box_spotlight_lecdems",

					"gridText": "LecDems",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "LecDem",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "LecDem",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "LecDem",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Lectures and Demonstrations",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "lec dems",

					"top": "125px"

				}, {

					"id": "box_spotlight_deb",

					"gridText": "Saarang Debate",

					"left": "550px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Debate",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "debate",

					"top": "225px"

				}, {

					"id": "box_spotlight_inq",

					"gridText": "Saarang InQuisition",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang InQuisition",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang InQuisition",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang InQuisition",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Inquizition",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "inquisition",

					"top": "325px"

				}, {

					"id": "box_spotlight_spray",

					"gridText": "Saarang Spray",

					"left": "650px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang Spray",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang Spray",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang Spray",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Spray",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "spray",

					"top": "125px"

				}, {

					"id": "box_spotlight_carnival",

					"gridText": "Saarang Carnival",

					"left": "650px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang Carnival",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang Carnival",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang Carnival",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Carnival",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "carnival",

					"top": "325px"

				}, {

					"id": "box_spotlight_decibels",

					"gridText": "Decibels",

					"left": "550px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Decibels",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "decibels",

					"top": "425px"

				}, {

					"id": "box_spotlight_canvas",

					"gridText": "Dreams On Canvas",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Dreams on Canvas",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "canvas",

					"top": "425px"

				}, {

					"id": "box_spotlight_tarang",

					"gridText": "Tarang",

					"left": "650px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Tarang",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "tarang",

					"top": "525px"

				}, {

					"id": "box_spotlight_cinema",

					"gridText": "Cinemascope",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Cinemascope",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "cinemascope",

					"top": "525px"

				}, {

					"id": "box_spotlight_gallery",

					"gallery": [

						"images/mainPageSlideshow/choreonight.jpg", "images/mainPageSlideshow/classicalnight.jpg", "images/mainPageSlideshow/lecdems.jpg"

					],

					"left": "250px",

					"animationInStartPosition": {

						"top": "200px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "200px",

						"left": "850px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"type": "box_gallery",

					"width": "200px",

					"height": "200px",

					"name": "gallery",

					"top": "225px"

				}

			]

		}, {

			"id": "page_hospitality",

			"title": "Hospitality Page",

			"name": "Hospitality Page",

			"boxes": [

				{

					"id": "box_hospi_close",

					"left": "200px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "450px"

				}, {

					"id": "box_hospi_title",

					"gridText": "Hospitality",

					"left": "250px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "hospi title",

					"top": "350px"

				}, {

					"id": "box_hospi_intro",

					"gridText": "Introduction",

					"left": "350px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Introduction",

							"activeTabs": [

								0

							],

							"xmlTag": "intro",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "intro",

					"top": "250px"

				}, {

					"id": "box_hospi_queries",

					"gridText": "Queries",

					"left": "250px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Queries",

							"activeTabs": [

								0

							],

							"xmlTag": "contact",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "queries",

					"top": "150px"

				}, {

					"id": "box_hospi_desk",

					"gridText": "Hospi Desk",

					"left": "450px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Hospitality Desk",

							"activeTabs": [

								0

							],

							"xmlTag": "desk",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "desk",

					"top": "150px"

				}, {

					"id": "box_hospi_reach",

					"gridText": "Reaching IITM",

					"left": "150px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Reaching IITM",

							"activeTabs": [

								0

							],

							"xmlTag": "reaching",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "reach",

					"top": "50px"

				}, {

					"id": "box_hospi_alt",

					"gridText": "Alternate Accommodation",

					"left": "550px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Alternate Accomodation",

							"activeTabs": [

								0

							],

							"xmlTag": "acco",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "alt acc",

					"top": "250px"

				}, {

					"id": "box_hospi_info",

					"gridText": "Information",

					"left": "650px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Information",

							"activeTabs": [

								0

							],

							"xmlTag": "info",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "info",

					"top": "150px"

				}, {

					"id": "box_hospi_accportal",

					"gridText": "Accommodation Portal",

					"left": "450px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Accomodation Portal",

							"activeTabs": [

								0

							],

							"xmlTag": "portal",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "acc portal",

					"top": "350px"

				}, {

					"id": "box_hospi_cont",

					"gridText": "Control Room",

					"left": "550px",

					"ajaxURL": "query1.php",

					"ajaxFetch": true,

					"queryString": "?event=t",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Control Room",

							"activeTabs": [

								0

							],

							"xmlTag": "control",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "control",

					"top": "450px"

				}

			],

			"parentIndex": 0

		}, {

			"id": "page_spons",

			"title": "Spons Page",

			"name": "Spons Page",

			"boxes": [

				{

					"id": "box_spons_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_spons_title",

					"gridText": "Sponsors & Media",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "spons title",

					"top": "200px"

				}, {

					"id": "box_spons_info",

					"gridText": "Information",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Event Info",

							"activeTabs": [

								0, 1

							],

							"xmlTag": "new_details",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "info",

					"top": "300px"

				}, {

					"id": "box_spons_cont",

					"gridText": "Contact",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Event Info",

							"activeTabs": [

								0, 1

							],

							"xmlTag": "new_details",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "contact",

					"top": "400px"

				}, {

					"id": "box_spons_sponslist",

					"gridText": "Our Sponsors",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Event Info",

							"activeTabs": [

								0

							],

							"xmlTag": "new_details",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"customZoom": true,

					"name": "current spons",

					"top": "200px"

				}, {

					"id": "box_spons_prevsponslist",

					"gridText": "Previous Sponsors",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Event Info",

							"activeTabs": [

								0

							],

							"xmlTag": "new_details",

							"type": "info"

						}

					],

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"customZoom": true,

					"name": "prev spons",

					"top": "400px"

				}

			],

			"parentIndex": 0

		}, {

			"id": "page_events",

			"title": "Events Page",

			"name": "Events Page",

			"boxes": [

				{

					"id": "box_events_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "50px"

				}, {

					"id": "box_event_music",

					"gridText": "Music",

					"left": "250px",

					"animationInStartPosition": {

						"top": "125px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 14,

					"height": "100px",

					"name": "spotlight",

					"top": "50px"

				}, {

					"id": "box_event_unwindevents",

					"gridText": "Unwind Events",

					"left": "150px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 5,

					"height": "100px",

					"name": "spotlight",

					"top": "150px"

				}, {

					"id": "box_event_speakingevents",

					"gridText": "Speaking Events",

					"left": "350px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "150px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 11,

					"height": "100px",

					"name": "spotlight",

					"top": "150px"

				}, {

					"id": "box_event_mediaevents",

					"gridText": "Media Events",

					"left": "550px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 12,

					"height": "100px",

					"name": "spotlight",

					"top": "150px"

				}, {

					"id": "box_event_literary",

					"gridText": "Literary",

					"left": "50px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 10,

					"height": "100px",

					"name": "spotlight",

					"top": "250px"

				}, {

					"id": "box_event_quizzing",

					"gridText": "Quizzing",

					"left": "250px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 18,

					"height": "100px",

					"name": "spotlight",

					"top": "250px"

				}, {

					"id": "box_event_online",

					"gridText": "Online Events",

					"left": "550px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 8,

					"height": "100px",

					"name": "spotlight",

					"top": "350px"

				}, {

					"id": "box_event_interactions",

					"gridText": "Interactions",

					"left": "350px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 9,

					"height": "100px",

					"name": "spotlight",

					"top": "350px"

				}, {

					"id": "box_event_dance",

					"gridText": "Dance",

					"left": "150px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 7,

					"height": "100px",

					"name": "spotlight",

					"top": "350px"

				}, {

					"id": "box_event_thespianevents",

					"gridText": "Thespian Events",

					"left": "450px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 6,

					"height": "100px",

					"name": "spotlight",

					"top": "250px"

				}, {

					"id": "box_event_finearts",

					"gridText": "Finearts",

					"left": "650px",

					"animationInStartPosition": {

						"top": "225px",

						"left": "0px"

					},

					"width": "100px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"type": "box_page_switch",

					"animationOutEndPosition": {

						"top": "50px",

						"left": "950px"

					},

					"animationOutDelay": 0,

					"pageSwitchIndex": 13,

					"height": "100px",

					"name": "spotlight",

					"top": "250px"

				}, {

					"id": "box_events_title",

					"gridText": "Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "events title",

					"top": "50px"

				}, {

					"animationInStartPosition": {

						"top": "75px",

						"left": "0px"

					},

					"color": 0,

					"animationOutDelay": 0,

					"top": "450px",

					"animationInDuration": 500,

					"tabs": [

						{

							"title": "Info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxURL": "query.php",

					"name": "sample",

					"type": "box_zoom",

					"gridText": "The Big Plan",

					"id": "box_events_bigplan",

					"animationInDelay": 0,

					"defaultTab": 1,

					"ajaxFetch": true,

					"left": "250px",

					"queryString": "?event=Big Plan",

					"animationOutDuration": 500,

					"animationOutEndPosition": {

						"top": "75px",

						"left": "850px"

					},

					"height": "100px",

					"width": "100px"

				}, {

					"animationInStartPosition": {

						"top": "75px",

						"left": "0px"

					},

					"color": 0,

					"animationOutDelay": 0,

					"top": "450px",

					"animationInDuration": 500,

					"tabs": [

						{

							"title": "Info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxURL": "query.php",

					"name": "carnival",

					"type": "box_zoom",

					"gridText": "Carnival",

					"id": "box_events_carnival",

					"animationInDelay": 0,

					"defaultTab": 1,

					"ajaxFetch": true,

					"left": "450px",

					"queryString": "?event=Saarang Carnival",

					"animationOutDuration": 500,

					"animationOutEndPosition": {

						"top": "75px",

						"left": "850px"

					},

					"height": "100px",

					"width": "100px"

				}, {

					"animationInStartPosition": {

						"top": "75px",

						"left": "0px"

					},

					"color": 0,

					"animationOutDelay": 0,

					"top": "450px",

					"animationInDuration": 500,

					"tabs": [

						{

							"title": "Info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxURL": "query.php",

					"name": "sample",

					"type": "box_zoom",

					"gridText": "Ink Talks",

					"id": "box_events_inktalks",

					"animationInDelay": 0,

					"defaultTab": 1,

					"ajaxFetch": true,

					"left": "50px",

					"queryString": "?event=testEvent",

					"animationOutDuration": 500,

					"animationOutEndPosition": {

						"top": "75px",

						"left": "850px"

					},

					"height": "100px",

					"width": "100px"

				}, {

					"animationInStartPosition": {

						"top": "75px",

						"left": "0px"

					},

					"color": 0,

					"animationOutDelay": 0,

					"top": "450px",

					"animationInDuration": 500,

					"tabs": [

						{

							"title": "Info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxURL": "query.php",

					"name": "Adventure Zone",

					"type": "box_zoom",

					"gridText": "Adventure Zone",

					"id": "box_events_adventure",

					"animationInDelay": 0,

					"defaultTab": 1,

					"ajaxFetch": true,

					"left": "650px",

					"queryString": "?event=Adventure Zone",

					"animationOutDuration": 500,

					"animationOutEndPosition": {

						"top": "75px",

						"left": "850px"

					},

					"height": "100px",

					"width": "100px"

				}

			],

			"parentIndex": 0

		}, {

			"id": "page_unwindevents",

			"title": "Unwind Events",

			"name": "Unwind Events",

			"boxes": [

				{

					"id": "box_uwe_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_uwe_title",

					"gridText": "Unwind Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "uwe title",

					"top": "200px"

				}, {

					"id": "box_uwe_dailyevents",

					"gridText": "Daily Events",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Daily Events",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "info",

					"top": "300px"

				}, {

					"id": "box_uwe_treasurehunt",

					"gridText": "Treasure Hunt",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Treasure Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Treasure Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Treasure Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Treasure Hunt",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "contact",

					"top": "400px"

				}, {

					"id": "box_uwe_sudoku",

					"gridText": "Sudoku",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Sudoku",

							"activeTabs": [

								0, 1

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Sudoku",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Sudoku",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Sudoku",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "current uwe",

					"top": "200px"

				}, {

					"id": "box_uwe_potpourrie",

					"gridText": "PotPourrie",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "PotPourrie",

							"activeTabs": [

								0, 1

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "PotPourrie",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "PotPourrie",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=PotPourrie",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "prev uwe",

					"top": "400px"

				}, {

					"id": "box_uwe_scavenger",

					"gridText": "Scavenger Hunt",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Scavenger Hunt",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "prev uwe",

					"top": "300px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_thespian",

			"title": "Thespian Events",

			"name": "Thespian Events",

			"boxes": [

				{

					"id": "box_thp_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_thp_title",

					"gridText": "Thespian Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "thp title",

					"top": "200px"

				}, {

					"id": "box_thp_dailyevents",

					"gridText": "Dramatics",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Dramatics",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Dramatics",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Dramatics",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Dramatics",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "dramatics",

					"top": "300px"

				}, {

					"id": "box_thp_treasurehunt",

					"gridText": "Mono Acting",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Mono Acting",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Mono Acting",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Mono Acting",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Mono Acting",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "monoacting",

					"top": "400px"

				}, {

					"id": "box_thp_sudoku",

					"gridText": "Street Play",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Street Play",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Street Play",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Street Play",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Street Play",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "street play",

					"top": "200px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_dance",

			"title": "Dance",

			"name": "Dance",

			"boxes": [

				{

					"id": "box_dance_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_dance_title",

					"gridText": "Dance",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "dance title",

					"top": "200px"

				}, {

					"id": "box_dance_choreonight",

					"gridText": "Choreo Night",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Choreo Night",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Choreo Night",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Choreo Night",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Choreo Night",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "choreo",

					"top": "300px"

				}, {

					"id": "box_dance_freestylesolo",

					"gridText": "Freestyle Solo",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Freestyle Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Freestyle Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Freestyle Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Freestyle Solo",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "freestyle",

					"top": "400px"

				}, {

					"id": "box_dance_streets",

					"gridText": "$treet$",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "$treet$",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "$treet$",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "$treet$",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=$treet$",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "streets",

					"top": "200px"

				}, {

					"id": "box_dance_classical",

					"gridText": "Classical Dance",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Classical Dance",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Classical Dance",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Classical Dance",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Classical Dance",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "classical",

					"top": "400px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_onlineevents",

			"title": "Online Events",

			"name": "Online Events",

			"boxes": [

				{

					"id": "box_ole_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_ole_title",

					"gridText": "Online Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "ole title",

					"top": "200px"

				}, {

					"id": "box_ole_kryptx",

					"gridText": "Kryptx",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Kryptx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Kryptx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Kryptx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Kryptx",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "kryptx",

					"top": "300px"

				}, {

					"id": "box_ole_onlinequiz",

					"gridText": "Online Quiz",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Online Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Online Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Online Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Online Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "online quiz",

					"top": "200px"

				}, {

					"id": "box_ole_onlinephoto",

					"gridText": "Online Photography Contest",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Online Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Online Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Online Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Online Photography Contest",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "online photography contest",

					"top": "300px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_interactions",

			"title": "Interactions",

			"name": "Interactions",

			"boxes": [

				{

					"id": "box_int_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_int_title",

					"gridText": "Interactions",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "int title",

					"top": "200px"

				}, {

					"id": "box_int_lecdems",

					"gridText": "LecDems",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "LecDems",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "LecDems",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "LecDems",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Lectures and demonstrations",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "lecdems",

					"top": "300px"

				}, {

					"id": "box_int_workshops",

					"gridText": "Workshops",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Workshops",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Workshops",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Workshops",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Workshops",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "workshops",

					"top": "400px"

				}, {

					"id": "box_int_cinemascope",

					"gridText": "Cinemascope",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Cinemascope",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Cinemascope",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "cinemascope",

					"top": "200px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_lit",

			"title": "Literary Events",

			"name": "Literary Events",

			"boxes": [

				{

					"id": "box_lit_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_lit_title",

					"gridText": "Literary Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "lit title",

					"top": "200px"

				}, {

					"id": "box_lit_wtg",

					"gridText": "Whats The Good Word",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Whats The Good Word",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Whats The Good Word",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Whats The Good Word",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Whats The Good Word",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "wtg",

					"top": "300px"

				}, {

					"id": "box_lit_crossie",

					"gridText": "Crossie",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Crossie",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Crossie",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Crossie",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Crossie",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "crossie",

					"top": "400px"

				}, {

					"id": "box_lit_scrabble",

					"gridText": "Scrabble",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Scrabble",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Scrabble",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Scrabble",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Scrabble",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "scrabble",

					"top": "200px"

				}, {

					"id": "box_lit_cluedo",

					"gridText": "Cluedo",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Cluedo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Cluedo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Cluedo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Cluedo",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "cluedo",

					"top": "300px"

				}, {

					"id": "box_lit_wrtawd",

					"gridText": "Saarang Writing Awards",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang Writing Awards",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang Writing Awards",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang Writing Awards",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Writing Awards",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "saarang writing awards",

					"top": "400px"

				}, {

					"id": "box_lit_spbee",

					"gridText": "Spelling Bee",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Spelling Bee",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Spelling Bee",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Spelling Bee",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Spelling Bee",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "spelling bee",

					"top": "500px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_spk",

			"title": "Speaking Events",

			"name": "Speaking Events",

			"boxes": [

				{

					"id": "box_spk_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_spk_title",

					"gridText": "Speaking Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "spk title",

					"top": "200px"

				}, {

					"id": "box_spk_jam",

					"gridText": "Jam",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Jam",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Jam",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Jam",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=JAM",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "jam",

					"top": "300px"

				}, {

					"id": "box_spk_eloc",

					"gridText": "Elocution",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Elocution",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Elocution",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Elocution",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Elocution",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "elocution",

					"top": "400px"

				}, {

					"id": "box_spk_dbt",

					"gridText": "Saarang Debate",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Saarang Debate",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Saarang Debate",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "debate",

					"top": "200px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_med",

			"title": "Media Events",

			"name": "Media Events",

			"boxes": [

				{

					"id": "box_med_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_med_title",

					"gridText": "Media Events",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "med title",

					"top": "200px"

				}, {

					"id": "box_med_sfm",

					"gridText": "Short Film Making",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Short Film Making",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Short Film Making",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Short Film Making",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=SFM",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "sfm",

					"top": "300px"

				}, {

					"id": "box_med_photo",

					"gridText": "Photography Contest",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Photography Contest",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Photography",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "photography contest",

					"top": "400px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_finearts",

			"title": "Fine Arts",

			"name": "Fine Arts",

			"boxes": [

				{

					"id": "box_fa_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_fa_title",

					"gridText": "Fine Arts",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "fa title",

					"top": "200px"

				}, {

					"id": "box_fa_day1",

					"gridText": "Fine Arts(Day 1)",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Fine Arts(Day 1)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Fine Arts(Day 1)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Fine Arts(Day 1)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Fine Arts Day 1",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "day1",

					"top": "300px"

				}, {

					"id": "box_fa_day2",

					"gridText": "Fine Arts(Day 2)",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Fine Arts(Day 2)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Fine Arts(Day 2)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Fine Arts(Day 2)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Fine Arts Day 2",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "day2",

					"top": "400px"

				}, {

					"id": "box_fa_day3",

					"gridText": "Fine Arts(Day 3)",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Fine Arts(Day 3)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Fine Arts(Day 3)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Fine Arts(Day 3)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Fine Arts Day 3",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "day3",

					"top": "200px"

				}, {

					"id": "box_fa_day4",

					"gridText": "Fine Arts(Day 4)",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Fine Arts(Day 4)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Fine Arts(Day 4)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Fine Arts(Day 4)",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Fine Arts Day 4",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "day4",

					"top": "400px"

				}, {

					"id": "box_fa_dreamsoncanvas",

					"gridText": "Dreams On Canvas",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Dreams On Canvas",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Dreams On Canvas",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "Dreams on Canvas",

					"top": "300px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_music",

			"title": "Music",

			"name": "Music",

			"boxes": [

				{

					"id": "box_music_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_music_title",

					"gridText": "Music",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "music title",

					"top": "200px"

				}, {

					"id": "box_music_lm",

					"gridText": "Light Music",

					"left": "350px",

					"defaultTab": 1,

					"type": "box_page_switch",

					"animationOutDelay": 0,

					"pageSwitchIndex": 15,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Daily Events",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": false,

					"ajaxURL": "query.php",

					"queryString": "?event=Daily Events",

					"width": "100px",

					"height": "100px",

					"name": "lm",

					"top": "300px"

				}, {

					"id": "box_music_wm",

					"gridText": "WM Solo",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "WM Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "WM Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "WM Solo",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=WM Solo",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "wm",

					"top": "400px"

				}, {

					"id": "box_music_nxg",

					"gridText": "NXG Rockstar",

					"left": "250px",

					"defaultTab": 1,

					"type": "box_page_switch",

					"animationOutDelay": 0,

					"pageSwitchIndex": 16,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Sudoku",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Sudoku",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Sudoku",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": false,

					"ajaxURL": "query.php",

					"queryString": "?event=Sudoku",

					"width": "100px",

					"height": "100px",

					"name": "nxg",

					"top": "200px"

				}, {

					"id": "box_music_db",

					"gridText": "Decibels",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Decibels",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Decibels",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "db",

					"top": "400px"

				}, {

					"id": "box_music_cm",

					"gridText": "Classical Music",

					"left": "150px",

					"defaultTab": 1,

					"type": "box_page_switch",

					"animationOutDelay": 0,

					"pageSwitchIndex": 17,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Scavenger Hunt",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": false,

					"ajaxURL": "query.php",

					"queryString": "?event=Scavenger Hunt",

					"width": "100px",

					"height": "100px",

					"name": "cm",

					"top": "300px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_lm",

			"title": "Light Music",

			"name": "Light Music",

			"boxes": [

				{

					"id": "box_lm_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_lm_title",

					"gridText": "Light Music",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "lm title",

					"top": "200px"

				}, {

					"id": "box_lm_lmacoustyx",

					"gridText": "LM Acoustyx",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "LM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "LM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "LM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=LM Acoustyx",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "jam",

					"top": "300px"

				}, {

					"id": "box_lm_tarang",

					"gridText": "Tarang",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Tarang",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Tarang",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "elocution",

					"top": "400px"

				}, {

					"id": "box_lm_alankaar",

					"gridText": "Alankaar",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Alankaar",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Alankaar",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Alankaar",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Alankaar",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "debate",

					"top": "200px"

				}

			],

			"parentIndex": 14

		}, {

			"id": "page_nxg",

			"title": "NXG Rockstar",

			"name": "NXG Rockstar",

			"boxes": [

				{

					"id": "box_nxg_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_nxg_title",

					"gridText": "NXG Rockstar",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "nxg title",

					"top": "200px"

				}, {

					"id": "box_nxg_wmacoustyx",

					"gridText": "WM Acoustyx",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "WM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "WM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "WM Acoustyx",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=WM Acoustyx",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "sfm",

					"top": "300px"

				}, {

					"id": "box_nxg_power",

					"gridText": "Powerchords",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Powerchords",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Powerchords",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Powerchords",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Powerchords",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "Powerchords contest",

					"top": "400px"

				}

			],

			"parentIndex": 14

		}, {

			"id": "page_cm",

			"title": "Classical Music",

			"name": "Classical Music",

			"boxes": [

				{

					"id": "box_cm_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_cm_title",

					"gridText": "Classical Music",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "cm title",

					"top": "200px"

				}, {

					"id": "box_cm_vocals",

					"gridText": "Vocals",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Vocals",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Vocals",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Vocals",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Vocals",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "jam",

					"top": "300px"

				}, {

					"id": "box_cm_eloc",

					"gridText": "Instrumental Percussion",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Instrumental Percussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Instrumental Percussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Instrumental Percussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Instrumental Percussion",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "elocution",

					"top": "400px"

				}, {

					"id": "box_cm_dbt",

					"gridText": "Instrumental NonPercussion",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Instrumental NonPercussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Instrumental NonPercussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Instrumental NonPercussion",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Instrumental NonPercussion",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "debate",

					"top": "200px"

				}

			],

			"parentIndex": 14

		}, {

			"id": "page_quizzing",

			"title": "Quizzing",

			"name": "Quizzing",

			"boxes": [

				{

					"id": "box_qz_close",

					"left": "550px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "125px",

					"animationInDelay": 0,

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "150px"

				}, {

					"id": "box_qz_title",

					"gridText": "Quizzing",

					"left": "450px",

					"backgroundPattern": "images/stripe6.png",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"type": "box_static",

					"width": "100px",

					"height": "100px",

					"name": "qz title",

					"top": "200px"

				}, {

					"id": "box_qz_main",

					"gridText": "Main Quiz",

					"left": "350px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Main Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Main Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Main Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Main Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "main",

					"top": "300px"

				}, {

					"id": "box_qz_spent",

					"gridText": "Spent Quiz",

					"left": "450px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Spent Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Spent Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Spent Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=SpEnt Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "spent",

					"top": "400px"

				}, {

					"id": "box_qz_india",

					"gridText": "India Quiz",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "India Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "India Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "India Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=India Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"type": "box_zoom",

					"name": "india",

					"top": "200px"

				}, {

					"id": "box_qz_buzzer",

					"gridText": "Buzzer Quiz",

					"left": "250px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "Buzzer Quiz",

							"activeTabs": [

								0, 1, 2,3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "Buzzer Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "Buzzer Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=Buzzer Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "buzzer",

					"top": "400px"

				}, {

					"id": "box_qz_av",

					"gridText": "AV Quiz",

					"left": "150px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 0,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 500,

					"animationInDuration": 500,

					"color": 1,

					"animationOutDelay": 0,

					"tabs": [

						{

							"title": "AV Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_details",

							"type": "info"

						}, {

							"title": "AV Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "new_rules",

							"type": "rules"

						}, {

							"title": "AV Quiz",

							"activeTabs": [

								0, 1, 2, 3

							],

							"xmlTag": "contact",

							"type": "contact"

						}

					],

					"ajaxFetch": true,

					"ajaxURL": "query.php",

					"queryString": "?event=AV Quiz",

					"type": "box_zoom",

					"width": "100px",

					"height": "100px",

					"name": "av",

					"top": "300px"

				}

			],

			"parentIndex": 4

		}, {

			"id": "page_test",

			"title": "Test Page",

			"name": "Test Page",

			"boxes": [

				{

					"id": "box_test_close",

					"left": "750px",

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"width": "200px",

					"animationInDelay": 100,

					"animationOutDuration": 1000,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"type": "box_close",

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"height": "200px",

					"name": "close_box",

					"top": "75px"

				}, {

					"id": "box_test_1",

					"gridText": "zoom box",

					"left": "400px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 300,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 1000,

					"animationInDuration": 500,

					"color": 0,

					"animationOutDelay": 0,

					"tabs": [

						{

							"queryString": "list",

							"type": "list",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "info",

							"type": "info",

							"activeTabs": [

								0, 2

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "rules",

							"type": "rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "shortlist",

							"type": "shortlist",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "contact",

							"type": "contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "gallery",

							"type": "gallery",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}

					],

					"type": "box_zoom",

					"width": "200px",

					"height": "200px",

					"name": "main_box",

					"top": "300px"

				}, {

					"id": "box_test_2",

					"gridText": "custom zoom box",

					"left": "100px",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 200,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 1000,

					"customZoom": true,

					"color": 2,

					"animationOutDelay": 0,

					"animationInDuration": 500,

					"tabs": [

						{

							"queryString": "list",

							"type": "list",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "info",

							"type": "info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "rules",

							"type": "rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "shortlist",

							"type": "shortlist",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "contact",

							"type": "contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "gallery",

							"type": "gallery",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}

					],

					"type": "box_zoom",

					"height": "150px",

					"width": "150px",

					"name": "event_box",

					"top": "100px"

				}, {

					"id": "box_test_3",

					"gridText": "static box",

					"left": "600px",

					"backgroundPattern": "images/stripe6.png",

					"defaultTab": 1,

					"animationInStartPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationInDelay": 200,

					"animationOutEndPosition": {

						"top": "0px",

						"left": "0px"

					},

					"animationOutDuration": 1000,

					"animationInDuration": 500,

					"color": 2,

					"animationOutDelay": 0,

					"tabs": [

						{

							"queryString": "list",

							"type": "list",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "info",

							"type": "info",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "rules",

							"type": "rules",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "shortlist",

							"type": "shortlist",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "contact",

							"type": "contact",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}, {

							"queryString": "gallery",

							"type": "gallery",

							"activeTabs": [

								0, 1, 2, 3

							],

							"ajaxURL": "query.php"

						}

					],

					"type": "box_static",

					"width": "150px",

					"height": "150px",

					"name": "event_box1",

					"top": "100px"

				}

			],

			"parentIndex": 0

		}

	],

	"site": {

		"id": "site_container",

		"title": "Saarang 2012",

		"backgroundColor": "#CCCCCC",

		"backgroundImageURL": "images/texturegrey.png"

	},

	"defaults": {

		"box": {

			"zoomInDuration": 500,

			"fillColors": [

				"#E05925", "#94BF13", "#56B5E4", "#cc0000", "#009900", "#0000cc"

			],

			"closeBoxHeight": 50,

			"zoomInDelay": 0,

			"closeBoxWidth": 50,

			"zoomedHeight": 400,

			"width": 150,

			"zoomOutDelay": 1000,

			"height": 150,

			"zoomedWidth": 400,

			"zoomOutDuration": 500,

			"class": "defaultClassBox"

		},

		"tab": {

			"animationOutDuration": 500,

			"animationOutDelay": 0,

			"highlightOutDuration": 700,

			"classes": {

				"default": "defaultClassTabDefault",

				"shortlist": "defaultClassTabShortlist",

				"contact": "defaultClassTabContact",

				"gallery": "defaultClassTabGallery",

				"list": "defaultClassTabList",

				"rules": "defaultClassTabRules",

				"close": "defaultClassTabClose",

				"info": "defaultClassTabInfo"

			},

			"height": 50,

			"width": 50,

			"highlightInDuration": 700,

			"animationInDuration": 700,

			"animationInterDelay": 100,

			"animationInDelay": 500

		},

		"page": {

			"switchDelay": 500,

			"id": "page_container",

			"redirectDelayIn": 1200,

			"class": "defaultClassPage",

			"redirectDelayOut": 1500

		}

	},

	"version": 2

};