$(document).on("ready",function(){
  	$("#request_button").click(function(){
		var toScroll = $(document).height()-$(window).height();
		$("body,html").animate({scrollTop: toScroll}, 1000, function(){
			$('#email').focus();
		});
	});

	$('#email').focus(function(){
		if ($('#email').val() === 'Enter your Google Account email'){
			$('#email').val('');
		}
	});

});

function dynamic() {
    $(".ct-lens").css('opacity','1');
	$('#door').css('left','-270px');
	$('#tagline').css('opacity','1');
	dots("milk");
}

function dots(sDot) {
			$("."+sDot+"_fade").addClass("animation");
			$("."+sDot+"_fade").css({"width":"48px","height":"48px","left":"-=18","top":"-=18","opacity":"0"})
		setTimeout(function(){
			switch (sDot){
			case "milk":
				dots("tab");
				break;
			case "tab":
				dots("element");
				break;
			case "element":
				dots("sticker");
				break;
			case "sticker":
				$(".fade").removeClass("animation")
				$(".fade").css({"width":"12px","height":"12px","left":"+=18","top":"+=18","opacity":"1"});
				setTimeout(function(){
					dots("milk");
				},2000);
				break;
			}
		},1000);
}

window.onload = dynamic;
