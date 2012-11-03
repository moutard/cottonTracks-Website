'use strict';
(function() {
  var Cotton = {};

  Cotton.Contact = {};

  Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
    };

  var lContactMedium = [
  { 'name': 'pigeon',
    'message' : "Send us this homing pigeon, he'll find his way. But don't forget to give him a treat, and wax-seal your envelope!",
    'joke': "We'll get back to you quickly. No guano attached.",
    'image': 'media/images/contact/medium/pigeon.png',
    'imageLabel': 'Pigeon',
    'attribution': '"Pigeon" symbol by Olivier Guin, from thenounproject.com collection.',
  },
  { 'name': 'cans',
    'message' : "Pull tight on this tin can phone, so we can hear you well!<br>(batteries not included)",
    'joke': "We'll get back to you quickly. No ravioli flavor attached.",
    'image': 'media/images/contact/medium/cans.png',
    'imageLabel': 'Cans',
    'attribution': '"Can" symbol by Megan Strickland, from thenounproject.com collection.',
  },
  { 'name': 'bottle',
    'message' : "Yarr, ye be sendin' a message in a bottle. You best put a great grand treasure map or you be walkin' the plank!<br>Arr!<br/>",
    'joke': "We'll get back to you quickly. No rum breath attached.",
    'image': 'media/images/contact/medium/bottle.png',
    'imageLabel': 'Bottle',
    'attribution': '"Bottle" symbol by Jiayuan Peng, from thenounproject.com collection.',
  },
  { 'name': 'smoke_signals',
    'message' : "Hugh. When us see smoke signals, then us meet at the tree of wisdom.<br/> Us leave tomahawk in tipi.",
    'joke': "We'll get back to you quickly. No scalp involved.",
    'image': 'media/images/contact/medium/smoke_signals.png',
    'imageLabel': 'Smoke Signals',
    'attribution': '"Fire" symbol by Nicolas Hue, "Blanket" and "Cloud" symbols from thenounproject.com collection.',
  },
  { 'name': 'morse',
    'message' : "We are glad you know morse code<br>.-- . /  -.. --- -. .----. - .-.-.- /  -... ..- - /  .-- . /  -.- -. --- .-- /  .... --- .-- /  - --- /  ..- ... . /  .. -. - . .-. -. . - --..-- /  .- -. -.. /  - .-. .- -. ... .-.. .- - . /  .. - .-.-.-  ",
    'joke': "We'll get back to you quickly. Anyways we have no telegraph.",
    'image': 'media/images/contact/medium/morse.png',
    'imageLabel': 'Morse',
    'attribution': '"Morse" symbol not from thenounproject.com collection.',
  },
  ];

  Cotton.Contact.Medium = Class.extend({

    _sName : undefined,
    _sMessage : undefined,
    _sJoke : undefined,
    _sImage : undefined,
    _sImageGreen : undefined,
    _sImageLabel : undefined,
    _sAttribution : undefined,
    
    _$medium : null,
    _$image : null,
    _$description : null,
    _$image_label : null,
    _$attribution: null,

    init: function(sName, sMessage, sJoke, sImage, sImageLabel, sAttribution) {
      var self = this;
      self._sName = sName;
      self._sMessage = sMessage;
      self._sJoke = sJoke;
      self._sImage = sImage;
      self._sImageGreen = sImage.replace(".","_green.");
      self._sImageLabel = sImageLabel;
      self._Attribution = sAttribution;
      

      self._$medium = $('<div class="medium"></div>');
      self._$image_block = $('<div class="image_block"></div>');
      self._$image = $('<img src="' + sImage + '" style="opacity: 1; ">');
      self._$image_label = $('<div class="image_label">' + sImageLabel + '</div>').hide();
      self._$description = $('<div class="description"></div>').hide();
      self._$attribution = $('<div class="attribution '+ sName +'">' + sAttribution + '</div>').hide();
      
      var $message = $('<p>' + sMessage + '<br/>' +
          'or alternatively you can send us an email.' +'</p>');
      var $mail = $('<div class="mail"><img src="media/images/contact/email.png">' +
          '<a href="mailto:contact@cottontracks.com">contact@cottontracks.com</a>' +
          '</div>');
      var $joke = $('<div class="joke">' + self._sJoke + '</div>');

      self._$medium.append(self._$image_block.append(self._$image, self._$image_label),
          self._$description.append($message, $mail, $joke));
      
    },

    $ : function() {
      return this._$medium;
    },
    
    description : function() {
      return this._$description;
    },
    
    image : function() {
      return this._$image;
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
        self._$image.show().css('margin-left','-260px');
        self._$image_label.show().css('margin-left','-260px');
        self._$attribution.show();
        // opacity is used for the animation.
        self._$description.show().css('opacity', '1');
        $('#attribution').append(self._$attribution.show());
      });
      return self;
    },
    
    deselect : function() {
      var self = this;
      self._$image.hide().css('margin-left','0px');
      self._$image_label.hide().css('margin-left','0px');
      self._$description.hide();
      self._$attribution.remove();
      self.toGrey();
      return null;
    },

  });

  Cotton.Contact.Page = Class.extend({

    _lMediums : null,

    _$page : null,
    _$contact_button : null,
    _$try_again_button : null,
    _oSelectedMedium : null,

    init : function() {
      var self = this;

      self._$try_again_button = $('<div class="try_again_button">TRY AGAIN</div>').click(
          function(){
            self._$try_again_button.hide();
            self.reset();
            self.start_selection();
          }).hide();

      self._lMediums = [];
      for(var i = 0; i < lContactMedium.length; i++){
        var dMedium = lContactMedium[i];
        self._lMediums.push(new Cotton.Contact.Medium(dMedium['name'],
            dMedium['message'], dMedium['joke'], dMedium['image'], dMedium['imageLabel'], dMedium['attribution']));
      }

    },

    $ : function() {
      return this._$page;
    },
    
    /**
     * display the contact button, and put the footer at the right place.
     */
    display : function() {
      var self = this;
      self._$contact_button = $(".contact_button").click(function(){
        self.start_selection();
      });

      if (($('#header').height() + $('#main').height() + $('#footer').height()) <= $(window).height()) {
        $('#footer').css({'position': 'fixed'});
      } else {
        $('#footer').css({'position': 'static'});
      }

      $('#footer').css({'opacity': '1'});

      self._$page = $('#main .content_column');
      for(var i=0, oMedium; oMedium = self._lMediums[i]; i++){
        oMedium.$().hide();
        self._$page.append(oMedium.$());
      }
      self._$page.append(self._$try_again_button);
    },
    
    /**
     * Select the result with a random number between 10 and 25, then start 
     * clignote function that handle animation.
     */
    start_selection : function() {
      var self = this;
      var iSelectedMedium = Math.floor((Math.random()*15)+10);;
      self._$contact_button.hide();
      self._$page.find('.contact_message').remove();
      self.one_harmed_bandit(0, iSelectedMedium);
    },
    
    /**
     * Start the one-harmed bandit animation, using a recursive function, launched
     * every time after 200 ms.
     * @param i
     * @param iSelectedMedium
     */
    one_harmed_bandit : function(i, iSelectedMedium) {
      var self = this;
      var iPrevious = (i-1).mod(lContactMedium.length);

      if(i < iSelectedMedium){
        var iCurrent = (i).mod(lContactMedium.length);

        self._lMediums[iPrevious].$().hide();
        self._lMediums[iCurrent].$().show();
        self._lMediums[iCurrent].image().show();
        setTimeout(function(){
          self.one_harmed_bandit(i+1, iSelectedMedium);
        }, 200);
      } else {
        setTimeout(function(){
          self._$try_again_button.show();
        }, 1000);
        self._oSelectedMedium  = self._lMediums[iPrevious];
        self._oSelectedMedium.select();
      }

    },
    
    /**
     * Before the try again button.
     */
    reset : function(){
      var self = this;
      self._oSelectedMedium = self._oSelectedMedium.deselect();
    },
  });

  var oPage = new Cotton.Contact.Page();
  $(window).load(function(){
    oPage.display();
  });
})();
