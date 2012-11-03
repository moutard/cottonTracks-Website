'use strict';
(function(){
  $(document).on("ready",function(){
    $(window).resize(function() {
      positionFooter();
    });
  });

  window.onload = function positionFooter() {
    if ($('#header').height()+$('#main').height()+$('#footer').height() <= $(window).height()) {
      $('#footer').css({'position': 'fixed'});
    } else {
      $('#footer').css({'position': 'static'});
    }
    $('#footer').css({'opacity': '1'});
  };
})();
