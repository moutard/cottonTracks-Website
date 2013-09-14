jQuery(document).ready(function($){
		var window_height = $(window).height();
		var window_width = $(window).width();

		//Set CSS
		if(window_height > 1060){
			$("#main-page").css("margin-top", 1060);
		}
		else if(window_width > 899){
			$("#main-page").css("margin-top", window_height);
		}
		//Window resizing
		$(window).resize(function() {
			window_height = $(window).height();
			window_width = $(window).width();
			
			if(window_height > 1060){
				$("#main-page").css("margin-top", 1060);
			}
			else if(window_width > 899){
				$("#main-page").css("margin-top", window_height);
			}
			else{
				$("#main-page").css("margin-top", 440);
			}
		});
});