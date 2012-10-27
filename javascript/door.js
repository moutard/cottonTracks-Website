$(document).on("ready",function(){
	$(".dot").hover(function(){
		if (!$(this).hasClass("fade")){
			hovered = true;
		}
	}, function(){
		hovered = false;
	}); 
});

var hovered = false;

function dynamic() {
	$('#door').css('left','-270px');
	$('#tagline').css('opacity','1');
	dots("milk");
}

function dots(sDot) {
	if (!hovered){
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
}

window.onload = dynamic;
