$(document).on("ready",function(){
	$(window).resize(function() {
		positionFooter();
	});
});

function positionFooter() {
	if ($('#header').height()+$('#main').height()+$('#footer').height() <= $(window).height()) {
		$('#footer').css({'position': 'fixed'});
	} else {
		$('#footer').css({'position': 'static'});
	}
}


window.onload = positionFooter;