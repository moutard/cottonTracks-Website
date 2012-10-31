//'use strict';
var Cotton = {};

Cotton.Contact = {};

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
  };

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
    self._$image_block = $('<div class="image_block"></div>');
    self._$image = $('<img src="' + sImage + '" style="opacity: 1; ">');
    self._$image_label = $('<div class="image_label">' + sImageLabel + '</div>').hide();
    self._$description = $('<div class="description"><p>'+ sMessage + '<br/>' +
        'or alternatively you can send us an email.' + '</p>' +
        '<div class="mail"><img src="images/email.png">' +
        '<a href="mailto:contact@cottontracks.com">contact@cottontracks.com</a>' +
        '</div><div class="joke">' + self._sJoke + '</div></div>').hide();

    self._$medium.append(self._$image_block.append(self._$image, self._$image_label),
        self._$description);
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

  blink : function(iBlinckCount, mCallBackFuntion) {
    var self = this;
    if(iBlinckCount < 5){
      iBlinckCount += 1;

      if(iBlinckCount % 2){
        self.toGreen();
      } else {
        self.toGrey();
      }

      setTimeout(function(){
        self.blink(iBlinckCount, mCallBackFuntion);
      },200);

    } else {
      mCallBackFuntion();
    }
  },

  select : function() {
    var self = this;
    self.blink(0, function(){
      self._$image.css('margin-left','-260px');
      self._$image_label.show().css('margin-left','-260px');
      self._$description.show().css('opacity', '1');
    });
  },
});

Cotton.Contact.Page = Class.extend({

  _lMediums : null,

  _$page : null,
  _$contact_button : null,
  _$try_again_button : null,

  init : function() {
    var self = this;

    self._$try_again_button = $('<div class="try_again_button">TRY AGAIN</div>').click(
        function(){
          self.animate();
        });

    self._lMediums = [];
    for(var i = 0; i < lContactMedium.length; i++){
      var dMedium = lContactMedium[i];
      self._lMediums.push(new Cotton.Contact.Medium(dMedium['name'],
          dMedium['message'], dMedium['joke'], dMedium['image'], dMedium['imageLabel']));
    }

  },

  $ : function() {
    return this._$page;
  },

  display : function() {
    var self = this;
    self._$contact_button = $(".contact_button").click(function(){
      self.animate();
    });

    if (($('#header').height() + $('#main').height() + $('#footer').height()) <= $(window).height()) {
      $('#footer').css({'position': 'fixed'});
    } else {
      $('#footer').css({'position': 'static'});
    }

    $('#footer').css({'opacity': '1'});

    self._$page = $('#main .content_column');
  },

  animate : function() {
    var self = this;
    var iSelectedMedium = Math.floor((Math.random()*15)+10);;
    self._$contact_button.hide();
    self._$page.find('p').remove();
    _.each(self._lMediums, function(oMedium){
      oMedium.$().hide();
      self._$page.append(oMedium.$());
    })

    self.clignote(0, iSelectedMedium);
  },

  clignote : function(i, iSelectedMedium) {
    var self = this;
    var iPrevious = (i-1).mod(lContactMedium.length);

    if(i < iSelectedMedium){
      var iCurrent = (i).mod(lContactMedium.length);

      self._lMediums[iPrevious].$().hide();
      self._lMediums[iCurrent].$().show();

      setTimeout(function(){
        self.clignote(i+1, iSelectedMedium);
      }, 200);
    } else {
      self._$page.append(self._$try_again_button);
      self._lMediums[iPrevious].select();
    }

  },
});

var oPage = new Cotton.Contact.Page();
$(window).load(function(){
  oPage.display();
});