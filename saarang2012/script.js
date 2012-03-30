var site = {};

$.fn.preloadBackgroundImage = function( url ){
	$('<img />')
		.attr('src', url)
		.load(function(){
			$("body").css( "background-image", "url(\"" + url + "\")" );
			$("body").css( "background-position", "50% 50%" );
			$("body").css( "background-repeat", "repeat" );
			$("body").css( "overflow", "hidden" );
			$("body").hide();
			loadSite();
    	});
}

$.fn.preloadBackgroundImage2 = function( url ){
	$('<img />')
		.attr('src', url)
		.load(function(){
			$("#backgroundSlideshow").css( "background-image", "url(\"" + url + "\")" );
			$("#backgroundSlideshow").css( "background-position", "50% 70%" );
			$("#backgroundSlideshow").fadeIn(1000);
    	});
}

function startApp() {
	
	loadSite();
	$("#bot_bar").css('left', (parseInt(window.innerWidth) - 600)/2+'px');
	
		//$("body").preloadBackgroundImage ( config.site.backgroundImageURL );
	/*
	$.getJSON('config_full.json', function( data ) {
		config = data;
		$("body").preloadBackgroundImage ( config.site.backgroundImageURL );
	} );
	*/
}

function loadSite() {
	
	site = new Site();
	
	if( $.browser.msie )
		if( parseInt($.browser.version, 10) < 9 )
			site.enableAnimation = false;
	
	site.loadPages();
	
	$("body").fadeIn(1000, function() {
		site.pages[0].animateAndShowBoxes();
		$("#backgroundSlideshow").hide();
		//$("#backgroundSlideshow").preloadBackgroundImage2 ( "images/mainbg2.jpg" );
		
		$.ajax({	url: "left_overlay.html",
  					success: function( data ){
    					$("#site_overlay_left_contents").append(data);
						$('#spons-ticker').cycle('fade');
						$('#update-ticker').cycle('fade');
  					}
				});
		
		$.ajax({	url: "right_overlay.html",
					success: function( data ){
  						$("#site_overlay_right_contents").append(data);
					}
		});
		
		
	} );
	
	$(window).resize( function() {
		site.jQSelector.css( "height", $(window).height() );
	} );
	/*$("#box_home_proshow").click(function() {$('#proshowbg').show(50);});
	$("#box_pro_close").click(function() {$('#proshowbg').hide(50);});*/
}


$(window).load( startApp );

