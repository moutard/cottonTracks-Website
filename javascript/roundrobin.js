var token = 1;
setInterval(function(){
  if (token === 1) {
    $('.slider1').addClass('hidden');
    $('.slider2').removeClass('hidden');
    token = 2;
  } else {
    $('.slider2').addClass('hidden');
    $('.slider1').removeClass('hidden');
    token = 1;
  }
}, 8000);