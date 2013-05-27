jQuery(document).ready(function($){
	$("#top_menu ul li a").mouseover(function(e){
		$(this).find("span").addClass("underline");
	}).mouseout(function(){
		$(this).find("span").removeClass("underline");
	});
});