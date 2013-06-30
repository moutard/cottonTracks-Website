jQuery(document).ready(function($){
	$("#top_menu ul li a").mouseover(function(e){
		$(this).find("span").toggleClass("underline");
	}).mouseout(function(){
		$(this).find("span").toggleClass("underline");
	});
});