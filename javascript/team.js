$(document).on("ready",function(){
	$(window).resize(function() {
		positionFooter();
	});
});

var lancement = 0;

function positionFooter() {
	if ($('#header').height()+$('#main').height()+$('#footer').height() <= $(window).height()) {
		$('#footer').css({'position': 'fixed'});
	} else {
		$('#footer').css({'position': 'static'});
	}
	if (lancement === 0) {
		$('#footer').css({'opacity': '1'});
	}
}


window.onload = positionFooter;