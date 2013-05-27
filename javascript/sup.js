$(document).on('ready',function() { 
	var sCurrentPicture='';
	var sPreviousPicture='';

	$('.vignette').hover(function(){
		sCurrentPicture = $(this).attr('src');
		if (sCurrentPicture != sPreviousPicture){
			$('.screenshot').css('display','block');
			$('.demo').css('display','none');	
			$('.vignette').removeClass('hovered');
			$('.vignette_video').removeClass('hovered');
			$(this).addClass('hovered');
			$('.screenshot').attr('src',sCurrentPicture);
			sPreviousPicture=sCurrentPicture;
			$('#preview').css('margin-top','76px');
		}
	});

	$('.vignette_video').hover(function(){
		sCurrentPicture = 'video';
		$('.vignette').removeClass('hovered');
		$(this).addClass('hovered');
		$('.screenshot').css('display','none');	
		$('.demo').css('display','block');	
		$('#preview').css('margin-top','20px');
		sPreviousPicture=sCurrentPicture;
	});
});