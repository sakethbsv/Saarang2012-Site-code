function Site () {
	
	this.load = function () {
		this.config = config.site;
		this.title = this.config.title;
		this.id = this.config.id;
		this.backgroundImageURL = this.config.backgroundImageURL;
		this.backgroundColor = this.config.backgroundColor;
		this.pages = [];
		this.enableAnimation = true;
		this.jQSelector = $("#"+this.id);
	
		this.setSiteCSS();
	};
	
	this.setSiteCSS = function () {
		
		this.jQSelector.css( "width", "100%" );
		this.jQSelector.css( "height", $(window).height() );
		this.jQSelector.css( "display" , "none" );
		this.jQSelector.css( "z-index" , 0 );
		//this.jQSelector.css( "background-color" , this.backgroundColor );
		this.jQSelector.css( "text-align" , "center" );
		//this.jQSelector.css( "background-image", "url(\""+this.backgroundImageURL+"\")" );
		//this.jQSelector.css( "background-position", "50% 50%" );
		//this.jQSelector.css( "background-repeat", "repeat" );
		
		$("#site_overlay_left").css( "opacity", 0.2 );
		$("#site_overlay_right").css( "opacity", 0.2 );
		
		this.pageParent = {};
		this.pageParent.id = config.defaults.page.id;
		this.jQSelector.append( "<div id=\"" + this.pageParent.id + "\"></div>" );
		this.pageParent.jQSelector = $("#"+this.pageParent.id);
		this.pageParent.jQSelector.css( "width", "850px" );
		this.pageParent.jQSelector.css( "height", "100%" );
		this.pageParent.jQSelector.css( "margin-left", "auto" );
		this.pageParent.jQSelector.css( "margin-right", "auto" );
		this.pageParent.jQSelector.css( "display" , "shown" );
		this.pageParent.jQSelector.css( "z-index" , 1 );
		//this.pageParent.jQSelector.css( "background-color" , "#DDD" );
		this.pageParent.jQSelector.css( "position" , "relative" );
		
	};
	
	this.__init__ = function () {
		this.load();
		this.createState();
		this.createAJAX();
		this.show();
	};
	
	this.show = function () {
		this.jQSelector.css( "display" , "block" );
	};
	
	this.hide = function () {
		this.jQSelector.css( "display" , "none" );
	};
	
	this.animateAndShow = function () {
		//coming soon
	};

	this.animateAndHide = function () {
		//coming soon
	};
	
	this.createState = function () {
		this.state = new State();
	};
	
	this.createAJAX = function () {
		this.ajax = new AJAX();
	};
	
	this.loadPage = function ( index ) {
		var page = new Page( this.pageParent, this, index );
		this.pages.push( page );
	};
	
	this.loadPages = function () {
		var numPages = config.pages.length;
		for ( var i = 0; i< numPages; ++i ) {
			this.loadPage( i );
		}
	};
	
	this.__init__();
	
}

function State () {
	
	/*
	
	STATE LEGEND
	0 - Idle
	1 - AJAX Active
	2 - Animating
	
	*/
	
	this.__init__ = function () {
		this.currentPageIndex = -1;
		this.currentBoxIndex = -1;
		this.currentState = -1;
	};
	
	this.switchState = function ( ) {
		//
	};
	
	this.updateState = function ( newState ) {
		this.currentState = newState;
		//hash fragment stuff here
	};
	
	this.__init__();
	
}

function AJAX () {
	
	this.__init__ = function () {
		//this.request = $.ajax();
		this.requestData = {};
		this.url = "";
		this.cache = false;
		this.type = "GET";
		this.dataType = "xml";
		this.context = {};
	};
	
	this.setURL = function ( url ) {
		this.url = url;
	};
	
	this.setCache = function ( cache ) {
		this.cache = cache;
	};
	
	this.setType = function ( type ) {
		this.setType = type;
	};
	
	this.setDataType = function ( dataType ) {
		this.setDataType = dataType;
	};
	
	this.clear = function () {
		this.url = "";
		this.cache = false;
		this.type = "GET";
		this.dataType = "html";
		this.context = {};
	};
	
	this.prepareRequestData = function () {
		this.requestData = {url : this.url,
							type : this.type,
							success : this.success,
							context : this.context
							};
	};
	
	this.sendRequest = function () {
		this.prepareRequestData();
		if( this.request )
			this.request.abort();
		this.request = $.ajax( this.requestData );
	};
	
	this.prepareAndDispatch = function ( box ) {
		this.url = box.config.ajaxURL + box.config.queryString;
		this.context = box;
		this.success = box.processAJAXResponse;
		this.sendRequest();
	};
	
	this.__init__();
	
}

function Page ( domParent, parent, index ) {
	
	this.__init__ = function ( domParent, parent, index ) {
		this.load( domParent, parent, index );
		this.loadBoxes();
		//this.show();
	};
	
	this.load = function ( domParent, parent, index ) {
		this.parent = parent;
		this.domParent = domParent;
		this.index = index;
		this.config = config.pages[ this.index ];
		this.id = this.config.id;
		this.boxes = [];
		
		if ( this.config.parentIndex > -1)
			this.pageParent = this.parent.pages[ this.config.parentIndex ];
		
		this.domParent.jQSelector.append( "<div id=\"" + this.id + "\"></div>" );
		this.jQSelector = $("#"+this.id);
		this.jQSelector.css( "width", "100%" );
		this.jQSelector.css( "height", "100%" );
		this.jQSelector.css( "position", "absolute" );
		this.jQSelector.css( "left", "0px" );
		this.jQSelector.css( "top", "0px" );
		this.jQSelector.css( "display" , "none" );
		this.jQSelector.css( "z-index" , 1 );
		//this.jQSelector.css( "background-color" , this.backgroundColor );	
	};
	
	this.show = function () {
		this.jQSelector.css( "display", "block" ); 
	};
	
	this.hide = function () {
		this.jQSelector.css( "display", "none" );		
	};
	
	this.showAll = function () {
		
		for( var i = 0; i< this.boxes.length; ++i)
			this.boxes[i].show();
			
		this.jQSelector.css( "display", "block" ); 
	};
	
	this.hideAll = function () {
		
		for( var i = 0; i< this.boxes.length; ++i)
			this.boxes[i].hide();
		
		this.jQSelector.css( "display", "none" );		
	};
	
	this.animateAndShowBoxes = function () {
		
		if( this.parent.enableAnimation )
			this.animateAndShowBoxesAnimate();
		else
			this.animateAndShowBoxesNoAnimate();
		
	};
	
	this.animateAndShowBoxesAnimate = function () {
		
		this.show(); // page block
		this.jQSelector.css("z-index", 2 );
		
		var numBoxes = this.config.boxes.length;
		for( var i = 0; i < numBoxes; ++i) {
			var box = this.boxes[ i ];
			var jQSelector = box.jQSelector;
			var delay = box.config.animationInDelay;
			var duration = box.config.animationInDuration;
			
			// var startCSS = {"left" : box.config.animationInStartPosition.left,
			// 				"top" : box.config.animationInStartPosition.top,
			// 				"display" : "block",
			// 				"z-index" : 3,
			//  				"opacity" : 0 };
			// 
			// var endCSS = {	"left" : box.config.left,
			// 				"top" : box.config.top,
			// 				"z-index" : 4,
			// 				"opacity" : 1 };
			
			var startCSS = {"left" : parseInt( box.config.left ) - 500,
				"top" : parseInt( box.config.top ),
				"display" : "block",
				"z-index" : 3,
 				"opacity" : 0 };
			
			var endCSS = {	"left" : box.config.left,
							"top" : box.config.top,
							"z-index" : 4,
							"opacity" : 1 };
							
			box.hide();
							
			( function (selector, startPoint, endPoint, duration, delay) {
				setTimeout(function() 	{
					selector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										easing : "easeOutBack",
										queue : false } );
										}, delay );
			} )( jQSelector, startCSS, endCSS, duration, delay );
			
			box.attachHandlers();
			
		}
	};
	
	this.animateAndShowBoxesNoAnimate = function () {
		
		this.show(); // page block
		this.jQSelector.css("z-index", 2 );
		
		var numBoxes = this.config.boxes.length;
		for( var i = 0; i < numBoxes; ++i) {
			var box = this.boxes[ i ];
			var jQSelector = box.jQSelector;
			
			var endCSS = {	"left" : box.config.left,
							"top" : box.config.top,
							"z-index" : 4,
							"opacity" : 1 };
							
			jQSelector.hide();
			jQSelector.css( endCSS );
			jQSelector.show();
			
			box.attachHandlers();
			
		}
	};
	
	this.animateAndHideBoxes = function ( event ) {

		var thisPage = event.data.page;
		
		if( thisPage.parent.enableAnimation )
			thisPage.animateAndHideBoxesAnimate( event );
		else
			thisPage.animateAndHideBoxesNoAnimate( event );	
		
	};
	
	this.animateAndHideBoxesAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var numBoxes = thisPage.config.boxes.length;
		
		for( var i = 0; i < numBoxes; ++i) {
			var box = thisPage.boxes[ i ];
			var jQSelector = thisPage.boxes[ i ].jQSelector;
			var delay = thisPage.boxes[ i ].config.animationOutDelay;
			var duration = thisPage.boxes[ i ].config.animationOutDuration;
			
			// var startCSS = {"left" : jQSelector.css("left"),
			// 				"top" : jQSelector.css("top"),
			// 				"display" : "block",
			// 				"z-index" : 4,
			// 				"opacity" : 1 };
			// 
			// var endCSS = {"left" : thisPage.boxes[ i ].config.animationOutEndPosition.left,
			// 				"top" : thisPage.boxes[ i ].config.animationOutEndPosition.top,
			// 				"display" : "none",
			// 				"z-index" : 3,
			//  				"opacity" : 0 };
			
			var startCSS = {"left" : jQSelector.css("left"),
							"top" : jQSelector.css("top"),
							"display" : "block",
							"z-index" : 4,
							"opacity" : 1 };
			
			var endCSS = {"left" : parseInt( box.config.left ) + 500,
							"top" : parseInt( box.config.top ),
							"display" : "none",
							"z-index" : 3,
			 				"opacity" : 0 };
							
			( function (selector, startPoint, endPoint, duration, delay) {
				setTimeout(function() 	{
					selector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										easing : "easeInBack",
										queue : false } );
										}, delay );
			} )( jQSelector, startCSS, endCSS, duration, delay );
			
			box.detachHandlers();
			
		}
		
		box.parent.jQSelector.css("z-index",1);
		
		return false;
	};
	
	this.animateAndHideBoxesNoAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var numBoxes = thisPage.config.boxes.length;
		
		for( var i = 0; i < numBoxes; ++i) {
			var box = thisPage.boxes[ i ];
			var jQSelector = thisPage.boxes[ i ].jQSelector;
							
			jQSelector.hide();
			
			box.detachHandlers();
			
		}
		
		box.parent.jQSelector.css("z-index",1);
		
		return false;
	};
	
	this.attachBoxHandlers = function () {
		for( var i = 0; i< this.boxes.length; ++i)
			this.boxes[i].attachHandlers();
	};
	
	this.detachBoxHandlers = function () {
		for( var i = 0; i< this.boxes.length; ++i)
			this.boxes[i].detachHandlers();
	};
	
	this.loadBox = function ( index ) {
		var box = new Box( this, index );
		this.boxes.push( box );
	};
	
	this.loadBoxes = function ( index ) {
		for( var i = 0; i < this.config.boxes.length; ++i )
			this.loadBox( i );
	};

	this.closePage = function ( event ) {
		
		//console.log("Hit!");
		
		var thisPage = event.data.page;
		
		if( thisPage.parent.enableAnimation )
			thisPage.closePageAnimate( event );
		else
			thisPage.closePageNoAnimate( event );	
		
	};

	this.closePageAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var switchDelay = config.defaults.page.switchDelay;
		
		thisPage.animateAndHideBoxes( event );
		
		if( thisPage.pageParent ) {
			
			( function (thisPage,switchDelay) {
				setTimeout(function() 	{
					thisPage.pageParent.animateAndShowBoxes(); }, switchDelay );
			} )( thisPage, switchDelay );
			
		}
			//thisPage.pageParent.animateAndShowBoxes();
	};
	
	this.closePageNoAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var switchDelay = config.defaults.page.switchDelay;
		
		thisPage.animateAndHideBoxes( event );
		
		if( thisPage.pageParent ) {
			
			( function (thisPage,switchDelay) {
				setTimeout(function() 	{
					thisPage.pageParent.animateAndShowBoxes(); }, switchDelay );
			} )( thisPage, 0 );
			
		}
			//thisPage.pageParent.animateAndShowBoxes();
	};

	this.switchPage = function ( event ) {
		
		var thisPage = event.data.page;
		
		if( thisPage.parent.enableAnimation )
			thisPage.switchPageAnimate( event );
		else
			thisPage.switchPageNoAnimate( event );	
		
	};
	
	this.switchPageAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var pageSwitchIndex = event.data.index;
		var switchDelay = config.defaults.page.switchDelay;
		
		thisPage.animateAndHideBoxes( event );
		
		( function (thisPage, pageSwitchIndex,switchDelay) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, switchDelay );
		} )( thisPage, pageSwitchIndex, switchDelay );
		
		//thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes();
	};
	
	this.switchPageNoAnimate = function ( event ) {
		
		var thisPage = event.data.page;
		var pageSwitchIndex = event.data.index;
		var switchDelay = config.defaults.page.switchDelay;
		
		thisPage.animateAndHideBoxes( event );
		
		( function (thisPage, pageSwitchIndex,switchDelay) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, switchDelay );
		} )( thisPage, pageSwitchIndex, 0 );
		
		//thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes();
	};
	
	this.redirectFromBoxToPage = function ( event ) {
		
		var thisPage = event.data.page;
		
		if( thisPage.parent.enableAnimation )
			thisPage.redirectFromBoxToPageAnimate( event );
		else
			thisPage.redirectFromBoxToPageNoAnimate( event );	
		
	};
	
	this.redirectFromBoxToPageAnimate = function ( event ) {
	
		var thisBox = event.data.box;
		var thisPage = thisBox.parent;
		var pageSwitchIndex = event.data.index;
		
		var redirectDelayOut = config.defaults.page.redirectDelayOut;
		var switchDelay = config.defaults.page.switchDelay;
		var totalDelayOut = redirectDelayOut + switchDelay;
		
		thisBox.animateAndCloseBox( event );
		
		( function (thisPage, pageSwitchIndex,redirectDelay) {
			setTimeout(function() 	{
				thisPage.animateAndHideBoxes( event ); }, redirectDelay );
		} )( thisPage, pageSwitchIndex, redirectDelayOut );
		
		( function (thisPage, pageSwitchIndex,totalDelayOut) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, totalDelayOut );
		} )( thisPage, pageSwitchIndex, totalDelayOut );
		
	};
	
	this.redirectFromBoxToPageNoAnimate = function ( event ) {
	
		var thisBox = event.data.box;
		var thisPage = thisBox.parent;
		var pageSwitchIndex = event.data.index;
		
		var redirectDelayOut = config.defaults.page.redirectDelayOut;
		var switchDelay = config.defaults.page.switchDelay;
		var totalDelayOut = redirectDelayOut + switchDelay;
		
		thisBox.animateAndCloseBox( event );
		
		( function (thisPage, pageSwitchIndex,redirectDelay) {
			setTimeout(function() 	{
				thisPage.animateAndHideBoxes( event ); }, redirectDelay );
		} )( thisPage, pageSwitchIndex, 0 );
		
		( function (thisPage, pageSwitchIndex,totalDelayOut) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, totalDelayOut );
		} )( thisPage, pageSwitchIndex, 0 );
		
	};
	
	this.redirectFromBoxToBox = function ( event ) {
		
		var thisPage = event.data.page;
		
		if( thisPage.parent.enableAnimation )
			thisPage.redirectFromBoxToBoxAnimate( event );
		else
			thisPage.redirectFromBoxToBoxNoAnimate( event );	
		
	};
	
	this.redirectFromBoxToBoxAnimate = function ( event ) {
		var thisBox = event.data.box;
		var thisPage = thisBox.parent;
		var pageSwitchIndex = event.data.index;
		var boxIndex = event.data.boxIndex;
		var targetBox = thisPage.parent.pages[ pageSwitchIndex ].boxes[ boxIndex ];
		
		var redirectDelayOut = config.defaults.page.redirectDelayOut;
		var redirectDelayIn = config.defaults.page.redirectDelayIn;
		var switchDelay = config.defaults.page.switchDelay;
		var totalDelayOut = redirectDelayOut + switchDelay;
		var totalDelayIn = totalDelayOut + redirectDelayIn;
		
		thisBox.animateAndCloseBox( event );
		
		( function ( thisPage, pageSwitchIndex, redirectDelay ) {
			setTimeout(function() 	{
				thisPage.animateAndHideBoxes( event ); }, redirectDelay );
		} )( thisPage, pageSwitchIndex, redirectDelayOut );
		
		( function ( thisPage, pageSwitchIndex, totalDelayOut ) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, totalDelayOut );
		} )( thisPage, pageSwitchIndex, totalDelayOut );
		
		event.data.box = targetBox;
		
		( function ( targetBox, event, totalDelayIn ) {
			setTimeout(function() 	{
				targetBox.zoomIn( event ); }, totalDelayIn );
		} )( targetBox, event, totalDelayIn );
		
	};
	
	this.redirectFromBoxToBoxNoAnimate = function ( event ) {
		var thisBox = event.data.box;
		var thisPage = thisBox.parent;
		var pageSwitchIndex = event.data.index;
		var boxIndex = event.data.boxIndex;
		var targetBox = thisPage.parent.pages[ pageSwitchIndex ].boxes[ boxIndex ];
		
		var redirectDelayOut = config.defaults.page.redirectDelayOut;
		var redirectDelayIn = config.defaults.page.redirectDelayIn;
		var switchDelay = config.defaults.page.switchDelay;
		var totalDelayOut = redirectDelayOut + switchDelay;
		var totalDelayIn = totalDelayOut + redirectDelayIn;
		
		thisBox.animateAndCloseBox( event );
		
		( function ( thisPage, pageSwitchIndex, redirectDelay ) {
			setTimeout(function() 	{
				thisPage.animateAndHideBoxes( event ); }, redirectDelay );
		} )( thisPage, pageSwitchIndex, 0 );
		
		( function ( thisPage, pageSwitchIndex, totalDelayOut ) {
			setTimeout(function() 	{
				thisPage.parent.pages[ pageSwitchIndex ].animateAndShowBoxes(); }, totalDelayOut );
		} )( thisPage, pageSwitchIndex, 0 );
		
		event.data.box = targetBox;
		
		( function ( targetBox, event, totalDelayIn ) {
			setTimeout(function() 	{
				targetBox.zoomIn( event ); }, totalDelayIn );
		} )( targetBox, event, 0 );
		
	};
	
	this.__init__( domParent, parent, index );

}

function Box ( parent, index ) {
	
	this.__init__ = function ( parent, index ) {
		this.load( parent, index );
		//this.show();
		
		// Load tabs if box is not a close box
		
		if( this.type!= "box_close" ) {
			this.loadTabs();
			this.resetTabPosition();
			this.activeTabs = this.config.activeTabs;
		}	
	};
		
	this.load = function ( parent, index ) {
		
		this.parent = parent;
		this.index = index;
		this.config = config.pages[ this.parent.index ].boxes[ this.index ];
		this.id = this.config.id;
		this.type = this.config.type;
		this.tabs = [];
		this.activeTabIndex = this.config.defaultTab;
		this.innerBoxjQSelectors = [];
		
		if( this.type == "box_close" ) {
			this.width = config.defaults.box.closeBoxWidth;
			this.height = config.defaults.box.closeBoxHeight;
		} else {		
			this.width = this.config.width;
			this.height = this.config.height;		
		}
		
		if( this.type == "box_page_switch" )
			this.pageSwitchIndex = this.config.pageSwitchIndex;
		
		this.position = { 	"left" : this.config.left, 
							"top" : this.config.top };
		this.backgroundColor = config.defaults.box.fillColors[ this.config.color ];
		
		this.parent.jQSelector.append( "<div id=\"" + this.id + "\"></div>" );
		this.jQSelector = $("#"+this.id);
		this.jQSelector.css( "width", this.width );
		this.jQSelector.css( "height", this.height );
		this.jQSelector.css( "display" , "none" );
		this.jQSelector.css( "z-index" , 4 );
		this.jQSelector.css( "position", "absolute" );
		this.jQSelector.css( "left", this.position.left );
		this.jQSelector.css( "top", this.position.top );
		this.jQSelector.css( "background-color", this.backgroundColor );
		//this.jQSelector.css( "box-shadow", "0px 0px 10px #000" );
		this.jQSelector.addClass( "defaultClassBox" );
		
		if( this.type == "box_close" )
			this.jQSelector.css( "background-image", "url('images/tab_sprite.png')" );
		
		if( this.type!= "box_static" ) {
			this.jQSelector.css( "cursor", "pointer" );
		}
		
		if( this.config.backgroundPattern ) {
			this.jQSelector.css( "background-image", "url(\""+ this.config.backgroundPattern +"\")" );
			this.jQSelector.css( "background-repeat", "repeat" );
		}
			
		
		if( this.type == "box_gallery" ) {
			this.addGalleryBox();
		} else if( this.type == "box_close" ) {
			//
		} else {
			this.addInnerBox(-1);
			this.showInnerBox(0);	
		}
		
		//this.jQSelector.html( "<p>"+this.type+"</p><p>"+this.id+"</p>" );
		
		this.addClasses();
		
		//this.attachHandlers();
	};
	
	this.addGalleryBox = function () {
		
		var id = this.id + "_gallery_container";
		
		this.jQSelector.append( "<div id=\"" + id + "\"></div>" );
		var jQSelector = $("#"+id);
		this.innerBoxjQSelectors.push( jQSelector ); 
		jQSelector.css( "width", "100%" );
		jQSelector.css( "height", "100%" );
		jQSelector.css( "position", "relative" );
		jQSelector.css( "left", "0px" );
		jQSelector.css( "top", "0px" );
		
		var numPics = this.config.gallery.length;
		var html = "";
		for( var i = 0; i < numPics; ++i ) {
			var src = this.config.gallery[i];
			html = html + "<img src=" + src + " width=\"" + this.width + "\" height=\"" + this.height + "\">";
		}
		
		id = this.id + "_gallery";
		
		innerHtml = "<div id=\"" + id + "\" class=\"classInnerBoxGallery\" >" + html + "</div>";
		jQSelector.append( innerHtml );
		
		this.addSlideshowHandler( id );
	};
	
	this.addSlideshowHandler = function ( id ) {
		$( "#"+id ).cycle(	{ fx: 'fade' });
	};
	
	this.addInnerBox = function ( index, title, content ) {

		if( index != -1)
			var defaultTitle = this.tabs[ this.config.defaultTab ].config.title;
		
		var gridText = this.config.gridText;

		var id = this.id + "_"+ index;
		
		if( index == -1)
			id = this.id + "_grid";
		
		if( index == 0)
			id = this.id + "_loading";
		
		this.jQSelector.append( "<div id=\"" + id + "\"></div>" );
		var jQSelector = $("#"+id);
		this.innerBoxjQSelectors.push( jQSelector ); 
		jQSelector.css( "width", "100%" );
		jQSelector.css( "height", "100%" );
		jQSelector.css( "position", "relative" );
		jQSelector.css( "left", "0px" );
		jQSelector.css( "top", "0px" );
		//jQSelector.css( "display" , "none" );
		//jQSelector.css( "background-color" , "yellow" );
		//jQSelector.css( "z-index" , 6 );
		
		var innerHtml = "";
		
		if( index == -1)
			innerHtml = "<div id=\"" + id + "_title" + "\" class=\"classInnerBoxGrid\" >" + gridText + "</div>";
		else if( index == 0)
			// innerHtml = "<div id=\"" + id + "_title" + "\" class=\"classInnerBoxTitle\" >" + defaultTitle + "</div>" + 
			// 							"<div id=\"" + id + "_content" + "\" class=\"classInnerBoxContent classInnerBoxLoading\">Loading...</div>";
			innerHtml = "<div id=\"" + id + "_content" + "\" class=\"classInnerBoxContent classInnerBoxLoading\"></div>";
		else
			innerHtml = "<div id=\"" + id + "_title" + "\" class=\"classInnerBoxTitle\" >" + title + "</div>" +
							"<div id=\"" + id + "_content" + "\" class=\"classInnerBoxContent\">" + 
							"<div id=\"" + id + "_scroll" + "\" class=\"classInnerBoxScroll\" ><div class=\"customScrollBox\"><div class=\"container\">" +
							"<div class=\"content\">" + content + "</div></div>" + 
							"<div class=\"dragger_container\"><div class=\"dragger\"></div></div></div></div></div>";
	
		jQSelector.append( innerHtml );
		
		if( index > 0 )
			this.attachScrollHandler( id + "_scroll" );
		
		jQSelector.css( "display" , "none" );
	};
	
	this.attachScrollHandler = function ( id ) {
		$("#" + id).mCustomScrollbar("vertical",900,"easeOutCirc",1.05,"auto","yes","no",10);
		/*
		The scroll type (“vertical” or “horizontal”)
		The scroll easing amount (e.g. 400 for normal easing, 0 for no easing etc.)
		The scroll easing type
		The extra bottom scrolling space (applies to vertical scroll type only)
		Set the scrollbar height/width adjustment (“auto” for adjustable scrollbar height/width analogous to content length or “fixed” for fixed dimensions)
		Set mouse-wheel support (“yes” or “no”)
		Scrolling via buttons support (“yes” or “no”)
		Buttons scrolling speed (an integer between 1 and 20, with 1 indicating the slowest scroll speed)
		*/
	};
	
	this.showInnerBox = function ( index ) {
		this.innerBoxjQSelectors[ index ].css( "display", "block" );
	};
	
	this.hideInnerBox = function ( index ) {
		this.innerBoxjQSelectors[ index ].css( "display", "none" );
	};
	
	this.hideAllInnerBoxes = function () {
		var numInnerBoxes = this.innerBoxjQSelectors.length;
		for( var i=0; i < numInnerBoxes; ++i )
			this.innerBoxjQSelectors[ i ].css( "display", "none" );
	}
	
	this.attachHandlers = function () {
		
		//console.log(this.id + "_attached");
		
		if( this.type == "box_zoom" ) {
			this.jQSelector.bind( "click", { "box" : this }, this.zoomIn );
		}
		
		if( this.type == "box_close" ) {
			this.jQSelector.bind( "click", { "page" : this.parent }, this.parent.closePage );	
		}
		
		if( this.type == "box_page_switch" ) {
			this.jQSelector.bind( "click", { "page" : this.parent, "index": this.pageSwitchIndex }, this.parent.switchPage );	
		}
	};
	
	this.detachHandlers = function () {
			
		//console.log(this.id + "_detached");
		
		this.jQSelector.unbind("click");
	};
	
	this.addClasses = function () {
		
		if( this.type == "box_zoom" ) {
			this.jQSelector.addClass( "classZoomOnClick" );
		}
		
		if( this.type == "box_close" ) {
			this.jQSelector.addClass( "classPageCloseClick" );	
		}
		
		if( this.type == "box_page_switch" ) {
			this.jQSelector.addClass( "classPageSwitchClick" );	
		}
		
	};
	
	this.loadTab = function ( index ) {
		var tab = new Tab( this, index );
		this.tabs.push( tab );		
	};
	
	this.loadTabs = function () {
		if( this.config.tabs ) {
			var numTabs = this.config.tabs.length;
			for ( var i = -1; i < numTabs; ++i )
				this.loadTab( i );			
		}
	};
	
	this.zoomIn = function ( event ) {
		var thisBox = event.data.box;
		
		if( thisBox.parent.parent.enableAnimation )
			thisBox.zoomInAnimate( event );
		else
			thisBox.zoomInNoAnimate( event );
		
		thisBox.parent.detachBoxHandlers();
	};
	
	this.zoomInNoAnimate = function ( event ) {
		
		var thisBox = event.data.box;
		
		if ( thisBox.config.customZoom ) {
			var width = parseInt( thisBox.parent.jQSelector.css( "width" ) ) - 200;
			var height = parseInt( thisBox.parent.jQSelector.css( "height" ) ) - 200 ;
		} else {
			var width = config.defaults.box.zoomedWidth;
			var height = config.defaults.box.zoomedHeight;	
		}
				
		var endLeft = parseInt( thisBox.parent.jQSelector.css( "width" ) )/2 - parseInt( width )/2;
		var endTop = parseInt( thisBox.parent.jQSelector.css( "height" ) )/2 - parseInt( height )/2;
		
		var endCSS = {"left" : endLeft,
		 				"top" : endTop,
						"height" : height,
						"width" : width,
						"z-index" : 6 };
									
		thisBox.jQSelector.css( endCSS );
		
		thisBox.parent.detachBoxHandlers();
		
		if( thisBox.config.defaultTab ) {
			thisBox.activeTabIndex = thisBox.config.defaultTab;
			thisBox.activeTabs = thisBox.tabs[ thisBox.activeTabIndex ].config.activeTabs;			
		} else {
			thisBox.activeTabs = [ 0 ];
		}

		
		//console.log( thisBox.id, thisBox.activeTabIndex, thisBox.activeTabs, thisBox.innerBoxjQSelectors );
		
		if( thisBox.config.ajaxFetch ) {
			thisBox.destroyAllInnerBoxes();
			thisBox.addInnerBox(-1);
			thisBox.doAJAXFetch();
		}
			
		else 
			thisBox.animateAndShowTabs();
		
		return false;
	};
	
	this.zoomInAnimate = function ( event ) {
		
		var thisBox = event.data.box;
		
		var startCSS = {"left" : thisBox.jQSelector.css( "left" ),
		 				"top" : thisBox.jQSelector.css( "top" ),
						"height" : thisBox.jQSelector.css( "height" ),
						"width" : thisBox.jQSelector.css( "width" ),
						"display" : "block",
						"z-index" : 6,
						"opacity" : 1 };
		
		if ( thisBox.config.customZoom ) {
			var width = parseInt( thisBox.parent.jQSelector.css( "width" ) ) - 200;
			var height = parseInt( thisBox.parent.jQSelector.css( "height" ) ) - 200 ;
		} else {
			var width = config.defaults.box.zoomedWidth;
			var height = config.defaults.box.zoomedHeight;	
		}
		
		var endLeft = parseInt( thisBox.parent.jQSelector.css( "width" ) )/2 - parseInt( width )/2;
		var endTop = parseInt( thisBox.parent.jQSelector.css( "height" ) )/2 - parseInt( height )/2;
		
		var endCSS = {"left" : endLeft,
		 				"top" : endTop,
						"height" : height,
						"width" : width,
						"opacity" : 1,
						"z-index" : 6 };
						
		var duration = config.defaults.box.zoomInDuration;
		var delay = config.defaults.box.zoomInDelay;
		
		( function (thisBox, startPoint, endPoint, duration, delay) {
			setTimeout(function() {
				thisBox.jQSelector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										easing : "easeOutBack",
										queue : false,
										complete: thisBox.completeCall( thisBox ) } );
			}, delay );
		} )( thisBox, startCSS, endCSS, duration, delay );
		
		if( thisBox.config.defaultTab ) {
			thisBox.activeTabIndex = thisBox.config.defaultTab;
			thisBox.activeTabs = thisBox.tabs[ thisBox.activeTabIndex ].config.activeTabs;			
		} else {
			thisBox.activeTabs = [ 0 ];
		}
		
		if( thisBox.config.ajaxFetch ) {
			thisBox.destroyAllInnerBoxes();
			thisBox.addInnerBox(-1);
			thisBox.doAJAXFetch();
		}
			
		else 
			thisBox.animateAndShowTabs();
		
		return false;
	};
	
	this.completeCall = function ( box ) {
		//console.log( box );
	};
	
	this.doAJAXFetch = function () {
		
		this.addInnerBox( 0 );
		this.hideInnerBox( 0 );
		this.showInnerBox( 1 );
		
		this.parent.parent.ajax.prepareAndDispatch( this );
	};
	
	this.processAJAXResponse = function ( data, textStatus, jqXHR ) {
		
		var xmlResponse = $.parseXML(data);	
		var numTabs = this.config.tabs.length;
		
		for( var i = 0; i < numTabs; ++i ) {
			
			var tab = this.config.tabs[i];
			var tag = tab.xmlTag;
			var title = tab.title;
			var content = $(xmlResponse).find(tag).text();
			
			this.addInnerBox( i+1, title, content );		
		}
		
		this.animateAndShowTabs();
		this.hideInnerBox( 1 );
		this.showInnerBox(this.activeTabIndex + 1);
	};
	
	this.zoomOut = function () {
		
		if( this.parent.parent.enableAnimation )
			this.zoomOutAnimate();
		else
			this.zoomOutNoAnimate();
			
		this.parent.attachBoxHandlers();
	};
	
	this.zoomOutAnimate = function () {
		if( this.parent.parent.ajax.request )
			this.parent.parent.ajax.request.abort();
		
		var startCSS = {"left" : this.jQSelector.css( "left" ),
		 				"top" : this.jQSelector.css( "top" ),
						"height" : this.jQSelector.css( "height" ),
						"width" : this.jQSelector.css( "width" ),
						"display" : "block",
						"opacity" : 1,
						"z-index" : 6 };
		
		var width = this.config.width;
		var height = this.config.height;
		
		var endCSS = {"left" : this.position.left,
		 				"top" : this.position.top,
						"height" : height,
						"width" : width,
						"opacity" : 1,
						"z-index" : 4 };
						
		var duration = config.defaults.box.zoomOutDuration;
		var delay = config.defaults.box.zoomOutDelay;
		
		( function (thisBox, startPoint, endPoint, duration, delay) {
			setTimeout(function() {
						thisBox.hideAllInnerBoxes();
						thisBox.destroyAllInnerBoxes();
						thisBox.addInnerBox(-1);
						thisBox.showInnerBox(0);	
				thisBox.jQSelector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										easing : "easeInBack",
										queue : false } );
			}, delay );
		} )( this, startCSS, endCSS, duration, delay );
		
		
		return false;
	};
	
	this.zoomOutNoAnimate = function () {
		if( this.parent.parent.ajax.request )
			this.parent.parent.ajax.request.abort();
		
		this.hideAllInnerBoxes();
		this.destroyAllInnerBoxes();
		this.addInnerBox(-1);
		this.showInnerBox(0);	
		
		var width = this.config.width;
		var height = this.config.height;
		
		var endCSS = {"left" : this.position.left,
		 				"top" : this.position.top,
						"height" : height,
						"width" : width,
						"z-index" : 4 };
						

		this.jQSelector.css( endCSS );
		
		
		return false;
	};
	
	this.destroyAllInnerBoxes = function () {
		this.jQSelector.empty();
		this.innerBoxjQSelectors = [];
	};
	
	this.positionActiveTabs = function () {
		for( var i = 0; i < this.activeTabs.length; ++i ) {
			var jQSelector = this.tabs[ this.activeTabs[ i ] ].jQSelector;
			
			if ( this.config.customZoom ) {
				var boxWidth = parseInt( this.parent.jQSelector.css( "width" ) ) - 200;
				var boxHeight = parseInt( this.parent.jQSelector.css( "height" ) ) - 200;
			} else {
				var boxWidth = config.defaults.box.zoomedWidth;
				var boxHeight = config.defaults.box.zoomedHeight;
			}

			var posLeftRef = parseInt( this.parent.jQSelector.css( "width" ) )/2 + parseInt( boxWidth )/2;
			var posTopRef = parseInt( this.parent.jQSelector.css( "height" ) )/2 - parseInt( boxHeight )/2;

			var posLeft = posLeftRef;
			var posTop = posTopRef + ( i )*config.defaults.tab.height;
			
			jQSelector.css( "display", "none" );
			jQSelector.css( "position", "absolute" );
			jQSelector.css( "left", posLeft );
			jQSelector.css( "top", posTop );
		}
	};
	
	this.resetTabPosition = function () {
		for( var i = 0; i < this.tabs.length; ++i ) {
			var jQSelector = this.tabs[ i ].jQSelector;
			
			var boxWidth = config.defaults.box.zoomedWidth;
			var boxHeight = config.defaults.box.zoomedHeight;

			//var posLeft = parseInt( this.parent.jQSelector.css( "width" ) )/2;
			//var posTop = parseInt( this.parent.jQSelector.css( "height" ) )/2;
			
			var posLeft = "0px";
			var posTop = "0px";
			
			jQSelector.css( "display", "none" );
			jQSelector.css( "position", "absolute" );
			jQSelector.css( "left", posLeft );
			jQSelector.css( "top", posTop );
		}
	};
	
	this.animateAndShowTabs = function () {
	
		if( this.parent.parent.enableAnimation )
			this.animateAndShowTabsAnimate();
		else
			this.animateAndShowTabsNoAnimate();
		
	};
	
	this.animateAndShowTabsAnimate = function () {
		this.resetTabPosition();
		this.positionActiveTabs();
		
		for( var i = 0 ; i < this.activeTabs.length; ++i ) {
			var jQSelector = this.tabs[ this.activeTabs[ i ] ].jQSelector;
			var delay = config.defaults.tab.animationInDelay;
			var interDelay = config.defaults.tab.animationInterDelay;
			var duration = config.defaults.tab.animationInDuration;
			var startOffset = 100;
			var totalDelay = delay + i*interDelay;
		
			var startCSS = {"left" : parseInt( jQSelector.css("left"), 10 ) - startOffset,
							"display" : "block",
			 				"opacity" : 0,
			 				"z-index" : 5,
			 				"background-color" : this.tabs[ this.activeTabs[ i ] ].backgroundColor
			 				};
			
			// active tab highlighting 
			
			if( this.tabs[ this.activeTabs[ i ] ].index == (this.activeTabIndex - 1)) {
				startCSS[ "background-color" ] = this.backgroundColor;
			}		
			
			var endCSS = {	"left" : parseInt( jQSelector.css("left"), 10 ),
							"opacity" : 1 };
			
			( function (selector, startPoint, endPoint, duration, delay) {
				setTimeout(function() 	{
					selector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										/*easing : "easeOutBack",*/
										queue : false } );
										}, delay );
			} )( jQSelector, startCSS, endCSS, duration, totalDelay );
	
		}
		
		this.attachTabHandlers();
		this.deactiveActiveTab();
		
		return false;
	};
	
	this.animateAndShowTabsNoAnimate = function () {
		this.resetTabPosition();
		this.positionActiveTabs();
		
		for( var i = 0 ; i < this.activeTabs.length; ++i ) {
			var jQSelector = this.tabs[ this.activeTabs[ i ] ].jQSelector;	
			
			var endCSS = {	"left" : jQSelector.css("left"),
							"background-color" : this.tabs[ this.activeTabs[ i ] ].backgroundColor,
							"z-index" : 5 };	
			
			// active tab highlighting 
			
			if( this.tabs[ this.activeTabs[ i ] ].index == (this.activeTabIndex - 1)) {
				endCSS[ "background-color" ] = this.backgroundColor;
			}
			
			jQSelector.css( endCSS );
			jQSelector.show();
	
		}
		
		this.attachTabHandlers();
		this.deactiveActiveTab();
		
		return false;
	};
	
	this.animateAndHideTabs = function ( event ) {
		
		var thisBox = event.data.box;
		
		if( thisBox.parent.parent.enableAnimation )
			thisBox.animateAndHideTabsAnimate( event );
		else
			thisBox.animateAndHideTabsNoAnimate( event );
		
	};
	
	this.animateAndHideTabsAnimate = function ( event ) {
		
		var thisBox = event.data.box;
		
		for( var i = 0 ; i < thisBox.activeTabs.length; ++i ) {
			
			var j = thisBox.activeTabs.length - ( i + 1 );
			var jQSelector = thisBox.tabs[ thisBox.activeTabs[ j ] ].jQSelector;
			var delay = config.defaults.tab.animationOutDelay;
			var interDelay = config.defaults.tab.animationInterDelay;
			var duration = config.defaults.tab.animationOutDuration;
			var endOffset = 100;
			var totalDelay = delay + i*interDelay;
		
			var startCSS = 	{"left" : jQSelector.css("left"),
							"opacity" : 1,
							"z-index" : 5 };
							
			var endCSS = {	"left" : parseInt( jQSelector.css("left"), 10 ) - endOffset,
							"display" : "none",
							"opacity" : 0,
							"z-index" : 3 };
			
			( function (selector, startPoint, endPoint, duration, delay) {
				setTimeout(function() 	{
					selector.css( startPoint ).animate( endPoint, 
									{ 	duration : duration,
										/*easing : "easeOutBack",*/
										queue : false } );
										}, delay );
			} )( jQSelector, startCSS, endCSS, duration, totalDelay );
	
		}
		
		thisBox.detachTabHandlers();
		
		return false;
		
	};
	
	this.animateAndHideTabsNoAnimate = function ( event ) {
		
		var thisBox = event.data.box;
		
		for( var i = 0 ; i < thisBox.activeTabs.length; ++i ) {
			
			var j = thisBox.activeTabs.length - ( i + 1 );
			var jQSelector = thisBox.tabs[ thisBox.activeTabs[ j ] ].jQSelector;
							
			var endCSS = { "z-index" : 3 };
			
			jQSelector.css( endCSS );
			jQSelector.hide();
	
		}
		
		thisBox.detachTabHandlers();
		
		return false;
		
	};
	
	this.setActiveTab = function ( event ) {
		var thisTab = event.data.tab;
		var thisBox = event.data.box;
		
		thisBox.activeTabIndex = thisTab.index + 1;
		thisBox.activeTabs = thisTab.activeTabs;
		
	};
	
	this.deactiveActiveTab = function () {
		
		this.tabs[ this.activeTabIndex ].jQSelector.unbind("click");
		this.tabs[ this.activeTabIndex ].jQSelector.unbind("mouseover");
		this.tabs[ this.activeTabIndex ].jQSelector.unbind("mouseout");
	};
	
	this.attachTabHandlers = function () {
		for( var i = 0; i< this.tabs.length; ++i)
			this.tabs[i].attachHandlers();
	};
	
	this.detachTabHandlers = function () {
		for( var i = 0; i< this.tabs.length; ++i)
			this.tabs[i].detachHandlers();
	};
	
	this.switchTab = function ( event ) {
		
		var thisBox = event.data.box;
		
		if( thisBox.parent.parent.enableAnimation )
			thisBox.switchTabAnimate( event );
		else
			thisBox.switchTabNoAnimate( event );
		
	};
	
	this.switchTabAnimate = function ( event ) {
		var thisTab = event.data.tab;
		var thisBox = event.data.box;
		
		var interDelay = config.defaults.tab.animationInterDelay;
		var duration = config.defaults.tab.animationOutDuration;
		var switchDelay = (thisBox.activeTabs.length+1)*interDelay;
		
		thisBox.animateAndHideTabs( event );
		
		( function ( thisBox, switchDelay, event ) {
			setTimeout(function() 	{
				thisBox.hideInnerBox(thisBox.activeTabIndex + 1);
				thisBox.setActiveTab( event );
				thisBox.animateAndShowTabs();
				thisBox.showInnerBox(thisBox.activeTabIndex + 1);
				 }, switchDelay );
		} )( thisBox, switchDelay, event );
		
		return false;
	};
	
	this.switchTabNoAnimate = function ( event ) {
		var thisTab = event.data.tab;
		var thisBox = event.data.box;
		
		thisBox.animateAndHideTabs( event );
		thisBox.hideInnerBox(thisBox.activeTabIndex + 1);
		thisBox.setActiveTab( event );
		thisBox.animateAndShowTabs();
		thisBox.showInnerBox(thisBox.activeTabIndex + 1);
		
		return false;
	};	
	
	this.animateAndCloseBox = function ( event ) {
	
		var thisBox = event.data.box;
		
		thisBox.animateAndHideTabs( event );
		thisBox.zoomOut();
		
	};
	
	this.show = function () {
		this.jQSelector.css( "display", "block" ); 
	};
	
	this.hide = function () {
		this.jQSelector.css( "display", "none" );		
	};
	
	this.__init__( parent, index );
	
}

function Tab ( parent, index ) {
	
	this.__init__ = function ( parent, index ) {
		this.load( parent, index );
	};
	
	this.load = function ( parent, index ) {
		this.parent = parent;
		this.index = index;
		this.backgroundColor = config.defaults.box.fillColors[ this.parent.config.color + 3 ];
		this.innerBoxIndex = 0;
		
		if( this.index == -1 ) {
			this.type = "close";
		}
		else {
			this.config = config.pages[ this.parent.parent.index ].boxes[ this.parent.index ].tabs[ this.index ];
			this.type = this.config.type;
			this.activeTabs = this.config.activeTabs;
		}
		
		this.id = this.parent.id+"_tab_" + (this.type);
		
		var boxWidth = config.defaults.box.zoomedWidth;
		var boxHeight = config.defaults.box.zoomedHeight;
		
		var posLeftRef = parseInt( this.parent.parent.jQSelector.css( "width" ) )/2 - parseInt( boxWidth )/2;
		var posTopRef = parseInt( this.parent.parent.jQSelector.css( "height" ) )/2 - parseInt( boxHeight )/2;
		
		var posLeft = posLeftRef;
		var posTop = posTopRef + ( index + 1 )*config.defaults.tab.height;
		
		this.parent.parent.jQSelector.append( "<div id=\"" + this.id + "\"></div>" );
		this.jQSelector = $("#"+this.id);
		this.jQSelector.css( "width", config.defaults.tab.width );
		this.jQSelector.css( "height", config.defaults.tab.height );
		this.jQSelector.css( "display" , "none" );
		this.jQSelector.css( "z-index" , 5 );
		this.jQSelector.css( "position", "absolute" );
		this.jQSelector.css( "left", posLeft );
		this.jQSelector.css( "top", posTop );
		//this.jQSelector.css( "box-shadow", "0px 0px 10px #000" );
		this.jQSelector.css( "background-color", this.backgroundColor );
		this.jQSelector.css( "background-image", "url('images/tab_sprite.png')" );
		//this.jQSelector.html( "<p>"+ this.type +"</p><p>"+ this.index +"</p>" );
		
		this.addClasses();
		
		//this.attachHandlers();
							
	};
	
	this.addClasses = function () {
		this.jQSelector.addClass( config.defaults.tab.classes[ "default" ] );
		this.jQSelector.addClass( config.defaults.tab.classes[ this.type ] );
	};
	
	this.attachHandlers = function () {
		
		//console.log( this.id + "_attached" );
		
		if( this.type == "close" )
			this.jQSelector.bind( "click", { "box" : this.parent }, this.parent.animateAndCloseBox );
			
		//tab switch animation
		if( this.type!= "close" )
			this.jQSelector.bind( "click", {"tab" : this, "box" : this.parent }, this.parent.switchTab );	
			
		// mouseover animation
		this.jQSelector.bind("mouseover", { "tab" : this }, 
			function ( event ) {
				var thisTab = event.data.tab;
				var duration =  config.defaults.tab.highlightInDuration;
				thisTab.jQSelector.css( { "background-color" : thisTab.backgroundColor } ).animate( { "background-color" : thisTab.parent.backgroundColor }, { duration : duration,	queue : false } );
			} );
			
		// mouseout animation
		this.jQSelector.bind("mouseout", { "tab" : this }, 
			function ( event ) {
				var thisTab = event.data.tab;
				var duration =  config.defaults.tab.highlightOutDuration;
				thisTab.jQSelector.css( { "background-color" : thisTab.parent.backgroundColor  } ).animate( { "background-color" : thisTab.backgroundColor }, { duration : duration, queue : false } );
			} );
		
		// test handlers for redirect
		/*
		if( this.index == 0 )
			this.jQSelector.bind( "click", { "box" : this.parent, 
											"page": this.parent.parent, 
											"index" : 0 },
								this.parent.parent.redirectFromBoxToPage );
		if( this.index == 1 )
			this.jQSelector.bind( "click", { "box" : this.parent, 
											"page": this.parent.parent, 
											"index" : 0,
											"boxIndex": 0 },
								this.parent.parent.redirectFromBoxToBox );
		*/
		// end of test handlers		
		
	};
	
	this.detachHandlers = function () {
		
		//console.log( this.id + "_detached" );
		
		this.jQSelector.unbind("click");
	};

	this.show = function () {
		this.jQSelector.css( "display", "block" ); 
	};
	
	this.hide = function () {
		this.jQSelector.css( "display", "none" );		
	};

	this.__init__( parent, index );

}

