$(document).on("ready",function(){
   	$('#stopwheel').click(function() {
		stop=1;
	$('#stopwheel').css('opacity','0');
	$('#main p').css('opacity','0');
	$('#contactMedium').css('opacity','1');
	});
	
	$(window).resize(function() {
		positionFooter();
	});
});	
	
var lContactMedium = [];
lContactMedium[0] = "images/pigeon.png";
lContactMedium[1] = "images/cans.png";
lContactMedium[2] = "images/smoke_signals.png";
lContactMedium[3] = "images/morse.png";
lContactMedium[4] = "images/bottle.png";

var i = 0;
var stop = 0;
var n = 100;
var roll=0;
var color='grey';
var blinkcount=0;
var sContectMediumGreen='';

cycle();




function cycle() {
	if ( roll < 15){
	  roll= roll+stop;
      i = (i + 1) %5;
   	  $('#contactMedium').attr('src',lContactMedium[i]);
   	  setTimeout("cycle()",100);
	}
 else{
 	slowdown();
 }
  }
  

function slowdown() {
	if (n<=1000){
		n=n*1.5;
		i = (i + 1)%5;
    	$('#contactMedium').attr('src',lContactMedium[i]);
    	setTimeout("slowdown()",n);
	}
	else{
		selectMedium();
	}
}


function selectMedium() {
		i = (i + 1)%5;
    	$('#contactMedium').attr('src',lContactMedium[i]);
    	sContactMediumGreen = lContactMedium[i].replace(".","_green.");
		setTimeout("blink()",200);
		switch (i){
			case 0:
			var result = "pigeon";
			break;
			case 1:
			var result = "cans";
			break;
			case 2:
			var result = "smoke_signals";
			break;
			case 3:
			var result = "morse";
			break;
			case 4:
			var result = "bottle";
			break;
		}
		$("."+result).css('display','block');
		setTimeout(function(){$("."+result).css('opacity','1');}, 1000 );
		$("#attribution"+result).css('display','block');
		setTimeout(function(){$("#attribution"+result).css('opacity','1');}, 1000 );
}

function blink() {
	if(blinkcount < 5){
		blinkcount = blinkcount+1;
		if(color == 'grey'){
	    	$('#contactMedium').attr('src',sContactMediumGreen);
			color = 'green';
			setTimeout("blink()",200);
		}else {
			$('#contactMedium').attr('src',lContactMedium[i]);
			color = 'grey';
			setTimeout("blink()",200);
		}
	}else {
		switch (i){
			case 0:
			$('#descriptif').html('HOMING PIGEON');
			break;
			case 1:
			$('#descriptif').html('TIN CAN PHONE');
			break;
			case 2:
			$('#descriptif').html('SMOKE SIGNALS');
			break;
			case 3:
			$('#descriptif').html('MORSE CODE');
			break;
			case 4:
			$('#descriptif').html('MESSAGE IN A BOTTLE');
			break;
		}
		$('#descriptif').css({'opacity':'1', 'left': '130px'});
		$('#contactMedium').css('margin-left','-260px');}
}

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