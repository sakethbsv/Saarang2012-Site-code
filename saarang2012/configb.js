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
						"top": "75px",
						"left": "0px"
					},
					"width": "125px",
					"animationOutEndPosition": {
						"top": "125px",
						"left": "850px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
					"animationOutDelay": 0,
					"pageSwitchIndex": 1,
					"height": "125px",
					"name": "spotlight",
					"top": "75px"
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
					"top": "25px"
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
					"top": "350px"
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
					"top": "300px"
				}, {
					"id": "box_home_proshow",
					"gridText": "Pro Shows",
					"left": "600px",
					"animationInStartPosition": {
						"top": "475px",
						"left": "0px"
					},
					"tabs": [
						{
							"title": "Proshows",
							"activeTabs": [
								0
							],
							"xmlTag": "coming",
							"type": "info"
						}
					],
					"ajaxURL": "querypro.php",
					"queryString": "?event=test",
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "475px",
						"left": "850px"
					},
					"animationOutDuration": 500,
					"animationInDuration": 500,
					"color": 0,
					"animationOutDelay": 0,
					"type": "box_zoom",
					"width": "125px",
					"pageSwitchIndex": 4,
					"height": "125px",
					"name": "proshows",
					"top": "425px",
					"ajaxFetch": true,
					"defaultTab": 1
				}, {
					"id": "box_home_aboutus",
					"gridText": "About Us",
					"left": "275px",
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
					"color": 1,
					"animationOutDelay": 0,
					"type": "box_page_switch",
					"width": "125px",
					"pageSwitchIndex": 19,
					"height": "125px",
					"name": "aboutus",
					"top": "435px"
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
					"animationOutEndPosition": {
						"top": "200px",
						"left": "850px"
					},
					"animationOutDuration": 500,
					"type": "box_gallery",
					"color": 1,
					"animationInDelay": 0,
					"animationInDuration": 500,
					"animationOutDelay": 0,
					"height": "200px",
					"name": "gallery",
					"top": "150px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 0,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
					"height": "200px",
					"name": "close_box",
					"top": "25px"
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
					"top": "75px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "75px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "lec dems",
					"type": "box_zoom",
					"gridText": "LecDems",
					"id": "box_spotlight_lecdems",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Lectures and Demonstrations",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "175px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "debate",
					"type": "box_zoom",
					"gridText": "Saarang Debate",
					"id": "box_spotlight_deb",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "550px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Debate",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "275px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "inquisition",
					"type": "box_zoom",
					"gridText": "Saarang InQuisition",
					"id": "box_spotlight_inq",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Inquizition",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "75px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "spray",
					"type": "box_zoom",
					"gridText": "Saarang Spray",
					"id": "box_spotlight_spray",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "650px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Spray",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "275px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "carnival",
					"type": "box_zoom",
					"gridText": "Saarang Carnival",
					"id": "box_spotlight_carnival",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "650px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Carnival",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "375px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "decibels",
					"type": "box_zoom",
					"gridText": "Decibels",
					"id": "box_spotlight_decibels",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "550px",
					"animationOutDuration": 500,
					"queryString": "?event=Decibels",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "375px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "canvas",
					"type": "box_zoom",
					"gridText": "Dreams On Canvas",
					"id": "box_spotlight_canvas",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Dreams on Canvas",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "475px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "tarang",
					"type": "box_zoom",
					"gridText": "Tarang",
					"id": "box_spotlight_tarang",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "650px",
					"animationOutDuration": 500,
					"queryString": "?event=Tarang",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "475px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "cinemascope",
					"type": "box_zoom",
					"gridText": "Cinemascope",
					"id": "box_spotlight_cinema",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Cinemascope",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"id": "box_spotlight_gallery",
					"gallery": [
						"images/mainPageSlideshow/rock-show.jpg", "images/mainPageSlideshow/popular-night.jpg", "images/mainPageSlideshow/lecdems.jpg", "images/mainPageSlideshow/classical-night.jpg", "images/mainPageSlideshow/choreo-night.jpg", "images/mainPageSlideshow/saarang-village.jpg", "images/mainPageSlideshow/tarang-decibels.jpg", "images/mainPageSlideshow/wcs-asaf-avidan.jpg", "images/mainPageSlideshow/panache.jpg", "images/mainPageSlideshow/wcs-mime.jpg"
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
					"top": "175px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "250px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "intro",
					"type": "box_zoom",
					"gridText": "Introduction",
					"id": "box_hospi_intro",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "150px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "queries",
					"type": "box_zoom",
					"gridText": "Queries",
					"id": "box_hospi_queries",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "150px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "desk",
					"type": "box_zoom",
					"gridText": "Hospi Desk",
					"id": "box_hospi_desk",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "50px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "reach",
					"type": "box_zoom",
					"gridText": "Reaching IITM",
					"id": "box_hospi_reach",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "250px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "alt acc",
					"type": "box_zoom",
					"gridText": "Alternate Accommodation",
					"id": "box_hospi_alt",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "550px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "150px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "info",
					"type": "box_zoom",
					"gridText": "Information",
					"id": "box_hospi_info",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "650px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "350px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "acc portal",
					"type": "box_zoom",
					"gridText": "Accommodation Portal",
					"id": "box_hospi_accportal",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "450px",
					"animationInDuration": 500,
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
					"ajaxURL": "query1.php",
					"name": "control",
					"type": "box_zoom",
					"gridText": "Control Room",
					"id": "box_hospi_cont",
					"queryString": "?event=t",
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "550px",
					"animationOutDuration": 500,
					"animationInDelay": 0,
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"queryString": "?event=t",
					"ajaxURL": "queryspons.php",
					"ajaxFetch": true,
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
							"xmlTag": "information",
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
					"queryString": "?event=t",
					"ajaxURL": "queryspons.php",
					"ajaxFetch": true,
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
							"title": "Contact",
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
					"name": "contact",
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 1,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 1,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "150px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 2,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 2,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 1,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 1,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 1,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 2,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationOutEndPosition": {
						"top": "50px",
						"left": "950px"
					},
					"animationOutDuration": 500,
					"type": "box_page_switch",
					"color": 2,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
							"title": "The Big Plan",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_details",
							"type": "info"
						}, {
							"title": "The Big Plan",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_rules",
							"type": "rules"
						}, {
							"title": "The Big Plan",
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
							"title": "Ink Talks",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_details",
							"type": "info"
						}, {
							"title": "Ink Talks",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_rules",
							"type": "rules"
						}, {
							"title": "Ink Talks",
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
					"queryString": "?event=Ink Talks",
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
							"title": "Adventure Zone",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_details",
							"type": "info"
						}, {
							"title": "Adventure Zone",
							"activeTabs": [
								0, 1, 2, 3
							],
							"xmlTag": "new_rules",
							"type": "rules"
						}, {
							"title": "Adventure Zone",
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "info",
					"type": "box_zoom",
					"gridText": "Daily Events",
					"id": "box_uwe_dailyevents",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Daily Events",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "contact",
					"type": "box_zoom",
					"gridText": "Treasure Hunt",
					"id": "box_uwe_treasurehunt",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Treasure Hunt",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "current uwe",
					"type": "box_zoom",
					"gridText": "Sudoku",
					"id": "box_uwe_sudoku",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Sudoku",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "prev uwe",
					"type": "box_zoom",
					"gridText": "PotPourrie",
					"id": "box_uwe_potpourrie",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=PotPourrie",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "prev uwe",
					"type": "box_zoom",
					"gridText": "Scavenger Hunt",
					"id": "box_uwe_scavenger",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Scavenger Hunt",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "dramatics",
					"type": "box_zoom",
					"gridText": "Dramatics",
					"id": "box_thp_dailyevents",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Dramatics",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "monoacting",
					"type": "box_zoom",
					"gridText": "Mono Acting",
					"id": "box_thp_treasurehunt",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Mono Acting",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "street play",
					"type": "box_zoom",
					"gridText": "Street Play",
					"id": "box_thp_sudoku",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Street Play",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "choreo",
					"type": "box_zoom",
					"gridText": "Choreo Night",
					"id": "box_dance_choreonight",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Choreo Night",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "freestyle",
					"type": "box_zoom",
					"gridText": "Freestyle Solo",
					"id": "box_dance_freestylesolo",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Freestyle Solo",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "streets",
					"type": "box_zoom",
					"gridText": "$treet$",
					"id": "box_dance_streets",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=$treet$",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "classical",
					"type": "box_zoom",
					"gridText": "Classical Dance",
					"id": "box_dance_classical",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Classical Dance",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "kryptx",
					"type": "box_zoom",
					"gridText": "Kryptx",
					"id": "box_ole_kryptx",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Kryptx",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "online quiz",
					"type": "box_zoom",
					"gridText": "Online Quiz",
					"id": "box_ole_onlinequiz",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Online Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "online photography contest",
					"type": "box_zoom",
					"gridText": "Online Photography Contest",
					"id": "box_ole_onlinephoto",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Online Photography Contest",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "lecdems",
					"type": "box_zoom",
					"gridText": "LecDems",
					"id": "box_int_lecdems",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Lectures and demonstrations",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
					"tabs": [
						{
							"title": "Workshops",
							"activeTabs": [
								0, 1, 3
							],
							"xmlTag": "new_details",
							"type": "info"
						}, {
							"title": "Workshops",
							"activeTabs": [
								0, 1, 3
							],
							"xmlTag": "new_rules",
							"type": "rules"
						}, {
							"title": "Workshops",
							"activeTabs": [
								0, 1, 3
							],
							"xmlTag": "contact",
							"type": "contact"
						}
					],
					"ajaxURL": "query.php",
					"name": "workshops",
					"type": "box_zoom",
					"gridText": "Workshops",
					"id": "box_int_workshops",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Workshops",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "cinemascope",
					"type": "box_zoom",
					"gridText": "Cinemascope",
					"id": "box_int_cinemascope",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Cinemascope",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "wtg",
					"type": "box_zoom",
					"gridText": "Whats The Good Word",
					"id": "box_lit_wtg",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Whats The Good Word",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "crossie",
					"type": "box_zoom",
					"gridText": "Crossie",
					"id": "box_lit_crossie",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Crossie",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "scrabble",
					"type": "box_zoom",
					"gridText": "Scrabble",
					"id": "box_lit_scrabble",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Scrabble",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "cluedo",
					"type": "box_zoom",
					"gridText": "Cluedo",
					"id": "box_lit_cluedo",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Cluedo",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "saarang writing awards",
					"type": "box_zoom",
					"gridText": "Saarang Writing Awards",
					"id": "box_lit_wrtawd",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Writing Awards",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "500px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "spelling bee",
					"type": "box_zoom",
					"gridText": "Spelling Bee",
					"id": "box_lit_spbee",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Spelling Bee",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "jam",
					"type": "box_zoom",
					"gridText": "Jam",
					"id": "box_spk_jam",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=JAM",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "elocution",
					"type": "box_zoom",
					"gridText": "Elocution",
					"id": "box_spk_eloc",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Elocution",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "debate",
					"type": "box_zoom",
					"gridText": "Saarang Debate",
					"id": "box_spk_dbt",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Saarang Debate",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "sfm",
					"type": "box_zoom",
					"gridText": "Short Film Making",
					"id": "box_med_sfm",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=SFM",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "photography contest",
					"type": "box_zoom",
					"gridText": "Photography Contest",
					"id": "box_med_photo",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Photography",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "day1",
					"type": "box_zoom",
					"gridText": "Fine Arts(Day 1)",
					"id": "box_fa_day1",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Fine Arts Day 1",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "day2",
					"type": "box_zoom",
					"gridText": "Fine Arts(Day 2)",
					"id": "box_fa_day2",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Fine Arts Day 2",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "day3",
					"type": "box_zoom",
					"gridText": "Fine Arts(Day 3)",
					"id": "box_fa_day3",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Fine Arts Day 3",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "day4",
					"type": "box_zoom",
					"gridText": "Fine Arts(Day 4)",
					"id": "box_fa_day4",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Fine Arts Day 4",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "Dreams on Canvas",
					"type": "box_zoom",
					"gridText": "Dreams On Canvas",
					"id": "box_fa_dreamsoncanvas",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Dreams On Canvas",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"pageSwitchIndex": 15,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "lm",
					"type": "box_page_switch",
					"gridText": "Light Music",
					"id": "box_music_lm",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": false,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Daily Events",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "wm",
					"type": "box_zoom",
					"gridText": "WM Solo",
					"id": "box_music_wm",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=WM Solo",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"pageSwitchIndex": 16,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "nxg",
					"type": "box_page_switch",
					"gridText": "The Hindu NXG Rockstar",
					"id": "box_music_nxg",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": false,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Sudoku",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "db",
					"type": "box_zoom",
					"gridText": "Decibels",
					"id": "box_music_db",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Decibels",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"pageSwitchIndex": 17,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "cm",
					"type": "box_page_switch",
					"gridText": "Classical Music",
					"id": "box_music_cm",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": false,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=Scavenger Hunt",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "jam",
					"type": "box_zoom",
					"gridText": "LM Acoustyx",
					"id": "box_lm_lmacoustyx",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=LM Acoustyx",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "elocution",
					"type": "box_zoom",
					"gridText": "Tarang",
					"id": "box_lm_tarang",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Tarang",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "debate",
					"type": "box_zoom",
					"gridText": "Alankaar",
					"id": "box_lm_alankaar",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Alankaar",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
					"height": "200px",
					"name": "close_box",
					"top": "150px"
				}, {
					"id": "box_nxg_title",
					"gridText": "The Hindu NXG Rockstar",
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "sfm",
					"type": "box_zoom",
					"gridText": "WM Acoustyx",
					"id": "box_nxg_wmacoustyx",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=WM Acoustyx",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "Powerchords contest",
					"type": "box_zoom",
					"gridText": "Powerchords",
					"id": "box_nxg_power",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Powerchords",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "jam",
					"type": "box_zoom",
					"gridText": "Vocals",
					"id": "box_cm_vocals",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Vocals",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "elocution",
					"type": "box_zoom",
					"gridText": "Instrumental Percussion",
					"id": "box_cm_eloc",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=Instrumental Percussion",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "debate",
					"type": "box_zoom",
					"gridText": "Instrumental NonPercussion",
					"id": "box_cm_dbt",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Instrumental NonPercussion",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
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
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "main",
					"type": "box_zoom",
					"gridText": "Main Quiz",
					"id": "box_qz_main",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=Main Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "spent",
					"type": "box_zoom",
					"gridText": "Spent Quiz",
					"id": "box_qz_spent",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=SpEnt Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "india",
					"type": "box_zoom",
					"gridText": "India Quiz",
					"id": "box_qz_india",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=India Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 2,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
					"tabs": [
						{
							"title": "Buzzer Quiz",
							"activeTabs": [
								0, 1, 2, 3
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
					"ajaxURL": "query.php",
					"name": "buzzer",
					"type": "box_zoom",
					"gridText": "Buzzer Quiz",
					"id": "box_qz_buzzer",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=Buzzer Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
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
					"ajaxURL": "query.php",
					"name": "av",
					"type": "box_zoom",
					"gridText": "AV Quiz",
					"id": "box_qz_av",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "150px",
					"animationOutDuration": 500,
					"queryString": "?event=AV Quiz",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}
			],
			"parentIndex": 4
		}, {
			"id": "page_footer",
			"title": "Saarang",
			"name": "Saarang",
			"boxes": [
				{
					"id": "box_saarang_close",
					"left": "550px",
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "125px",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 500,
					"type": "box_close",
					"color": 2,
					"animationOutDelay": 0,
					"animationInDelay": 0,
					"animationInDuration": 500,
					"height": "200px",
					"name": "close_box",
					"top": "150px"
				}, {
					"id": "box_saarang_title",
					"gridText": "About Us",
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
					"name": "saarang title",
					"top": "200px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 1,
					"animationOutDelay": 0,
					"top": "300px",
					"animationInDuration": 500,
					"tabs": [
						{
							"title": "Credits",
							"activeTabs": [
								0
							],
							"xmlTag": "credits",
							"type": "info"
						}
					],
					"ajaxURL": "queryfoot.php",
					"name": "credits",
					"type": "box_zoom",
					"gridText": "Credits",
					"id": "box_saarang_credits",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "350px",
					"animationOutDuration": 500,
					"queryString": "?event=test",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "400px",
					"animationInDuration": 500,
					"tabs": [
						{
							"title": "About Us",
							"activeTabs": [
								0
							],
							"xmlTag": "aboutus",
							"type": "info"
						}
					],
					"ajaxURL": "queryfoot.php",
					"name": "aboutus",
					"type": "box_zoom",
					"gridText": "About Us",
					"id": "box_saarang_aboutus",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "450px",
					"animationOutDuration": 500,
					"queryString": "?event=test",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}, {
					"animationInStartPosition": {
						"top": "0px",
						"left": "0px"
					},
					"color": 0,
					"animationOutDelay": 0,
					"top": "200px",
					"animationInDuration": 500,
					"tabs": [
						{
							"title": "Saarang",
							"activeTabs": [
								0
							],
							"xmlTag": "saarang",
							"type": "info"
						}
					],
					"ajaxURL": "queryfoot.php",
					"name": "saarang",
					"type": "box_zoom",
					"gridText": "Saarang",
					"id": "box_saarang_saarang",
					"animationInDelay": 0,
					"defaultTab": 1,
					"ajaxFetch": true,
					"left": "250px",
					"animationOutDuration": 500,
					"queryString": "?event=test",
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"width": "100px",
					"height": "100px"
				}
			],
			"parentIndex": 0
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
					"animationOutEndPosition": {
						"top": "0px",
						"left": "0px"
					},
					"animationOutDuration": 1000,
					"type": "box_close",
					"color": 0,
					"animationOutDelay": 0,
					"animationInDelay": 100,
					"animationInDuration": 500,
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
				"info": "defaultClassTabInfo",
				"shortlist": "defaultClassTabShortlist",
				"contact": "defaultClassTabContact",
				"gallery": "defaultClassTabGallery",
				"list": "defaultClassTabList",
				"rules": "defaultClassTabRules",
				"close": "defaultClassTabClose",
				"default": "defaultClassTabDefault"
			},
			"height": 50,
			"width": 50,
			"animationInDelay": 500,
			"animationInDuration": 700,
			"highlightInDuration": 700,
			"animationInterDelay": 100
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
}