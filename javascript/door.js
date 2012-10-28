$(document).on("ready",function(){
	$("#request_button").click(function(){
		window.scrollTop('1000px');
	});

	$(".dot").hover(function(){
		if (!$(this).hasClass("fade")){
			hovered = true;
		}
	}, function(){
		hovered = false;
		$(".fade").removeClass("animation")
		//dots(sCurrentDot);
	});
	
	$('#email').focus(function(){
		if ($('#email').val() === 'Enter your Google Account email'){
			$('#email').val('');
		}
	});
		
});

var hovered = false;
var sCurrentDot = "milk";


function dynamic() {
	$('#door').css('left','-270px');
	$('#tagline').css('opacity','1');
	dots(sCurrentDot);
}

function dots(sDot) {
	if (!hovered){
			$("."+sDot+"_fade").addClass("animation");
			$("."+sDot+"_fade").css({"width":"48px","height":"48px","left":"-=18","top":"-=18","opacity":"0"})
		setTimeout(function(){
			switch (sDot){
			case "milk":
				sCurrentDot = "tab";
				dots("tab");
				break;
			case "tab":
				sCurrentDot = "element";
				dots("element");
				break;
			case "element":
				sCurrentDot = "sticker";
				dots("sticker");
				break;
			case "sticker":
				sCurrentDot = "milk";
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
