//'use strict';
var Cotton = {};

Cotton.Contact = {};

var lContactMedium = [
{ 'name': 'pigeon',
  'message' : "Send us this homing pigeon, he'll find his way. But don't forget to give him a treat, and wax-seal your envelope!",
  'joke': "We'll get back to you quickly. No guano attached.",
  'image': 'images/pigeon.png',
  'imageLabel': 'Pigeon',
},
{ 'name': 'cans',
  'message' : "Pull tight on this tin can phone, so we can hear you well!<br>(batteries not included)",
  'joke': "We'll get back to you quickly. No ravioli flavor attached.",
  'image': 'images/cans.png',
  'imageLabel': 'Cans',
},
{ 'name': 'bottle',
  'message' : "Yarr, ye be sendin' a message in a bottle. You best put a great grand treasure map or you be walkin' the plank!<br>Arr!<br/>",
  'joke': "We'll get back to you quickly. No rum breath attached.",
  'image': 'images/bottle.png',
  'imageLabel': 'Bottle',
},
{ 'name': 'smoke_signals',
  'message' : "Hugh. When us see smoke signals, then us meet at the tree of wisdom.<br/> Us leave tomahawk in tipi.",
  'joke': "We'll get back to you quickly. No scalp involved.",
  'image': 'images/smoke_signals.png',
  'imageLabel': 'Smoke Signals',
},
{ 'name': 'morse',
  'message' : "We are glad you know morse code<br>.-- . /  -.. --- -. .----. - .-.-.- /  -... ..- - /  .-- . /  -.- -. --- .-- /  .... --- .-- /  - --- /  ..- ... . /  .. -. - . .-. -. . - --..-- /  .- -. -.. /  - .-. .- -. ... .-.. .- - . /  .. - .-.-.-  ",
  'joke': "We'll get back to you quickly. Anyways we have no telegraph.",
  'image': 'images/morse.png',
  'imageLabel': 'Pigeon',
},
];

Cotton.Contact.Medium = Class.extend({

  _sName : undefined,
  _sMessage : undefined,
  _sJoke : undefined,
  _sImage : undefined,
  _sImageGreen : undefined,
  _sImageLabel : undefined,

  _$medium : null,
  _$image : null,
  _$description : null,
  _$image_label : null,

  init: function(sName, sMessage, sJoke, sImage, sImageLabel) {
    var self = this;
    self._sName = sName;
    self._sMessage = sMessage;
    self._sJoke = sJoke;
    self._sImage = sImage;
    self._sImageGreen = sImage.replace(".","_green.");
    self._sImageLabel = sImageLabel;

    self._$medium = $('<div class="medium"></div>');
    self._$image = $('<img id="contactMedium" src="' + sImage + '" style="opacity: 1; ">');
    self._$image_label = $('<div id="image_label">' + sImageLabel + '</div>');
    self._$description = $('<div id="description">'+ sMessage + '<br/>' +
        'or alternatively you can send us an email.' +
        '<img class="mail" src="images/email.png">' +
        '<a class="email" href="mailto:contact@cottontracks.com">contact@cottontracks.com</a>' +
        '</div>');

    self._$medium.append(self._$image, self._$image_label, self._$description);
  },

  $ : function() {
    return this._$medium;
  },

  toGreen : function() {
    var self = this;
    self._$image.attr('src', self._sImageGreen);
  },

  toGrey : function() {
    var self = this;
    self._$image.attr('src', self._sImage);
  },

  blink : function(iBlinckCount) {
    var self = this;
    if(iBlinckCount < 5){
      iBlinckCount += 1;

      if(iBlinckCount % 2){
        self.toGreen();
        setTimeout(function(){
          self.blink(iBlinckCount);
        },200);
      } else {
        self.toGrey();
        setTimeout(function(){
          self.blink(iBlinckCount);
        },200);
      }
    }
  },
});

Cotton.Contact.Page = Class.extend({

  _lMediums : null,

  _$page : null,
  _$contact_button : null,
  _$try_again_button : null,

  init : function() {
    var self = this;
    self._$contact_button = $('<div class="contact_button"> CONTACT US </div>').click(function(){
      self.random();
    });
    self._$try_again_button = $('<div class="try_again_button"></div>');

    self._lMediums = [];
    for(var i = 0; i < lContactMedium.length; i++){
      var dMedium = lContactMedium[i];
      self._lMediums.push(new Cotton.Contact.Medium(dMedium['name'],
          dMedium['message'], dMedium['joke'], dMedium['image'], dMedium['imageLabel']));
    }

    self._$page = $('#main .content_column');
    self._$page.append(self._$contact_button);
  },

  $ : function() {
    return this._$page;
  },

  random : function() {
    self._$contact_button.hide();
  },
});

$(window).load(function(){
  var oPage = new Cotton.Contact.Page();
});

/*
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
*/