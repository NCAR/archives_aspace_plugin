$(document).ready(function(){

	$("ul.subnav").siblings().append("&nbsp; <span>&#187;</span>"); //Only shows drop down trigger when js is enabled - Adds empty span tag after ul.subnav
	// remove the actual link for drop downs
	$("a.accessibleLink").attr("href","#");
	
	// this is if they click on the actual link item
	$("a.accessibleLink").click(function() { //when top nav item is clicked
		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).parent().find("ul.subnav").show(); //Drop down the subnav on click
		// keep active item active
		$(this).addClass("active");
		
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subnav").hide(); //When the mouse hovers out of the subnav, move it back up
			$(this).parent().find("a").removeClass("active");
		});

		
		
	});
	
	// third level menus
	$("ul.subsubnav").siblings().append(" <span class=\"menuarrow\">&#187;</span>"); //Only shows drop down trigger when js is enabled - Adds empty span tag after ul.subnav
	// remove the actual link for drop downs
	$("a.accessibleSubLink").attr("href","#");

	// this is if they click on the actual link item
	$("a.accessibleSubLink").click(function() { //when top nav item is clicked
		
		//Following events are applied to the subnav itself (moving subnav up and down)
		$(this).parent().find("ul.subsubnav").show(); //Drop down the subnav on click
		// keep active item active
		$(this).addClass("active");
		
		$(this).parent().hover(function() {
		}, function(){	
			$(this).parent().find("ul.subsubnav").hide(); //When the mouse hovers out of the subnav, move it back up
			$(this).parent().find("a").removeClass("active");
		});

		
	});
	


});