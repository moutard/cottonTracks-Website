(function($) {
    var e = window.console ? console.log : alert;
	  
    $.fn.popUpForm = function(options) {
      
      $("#popUpHide").length || $('<div id="popUpHide" />').appendTo('body').css('display','none');

      if(!options.container) { alert('Container Option Required'); return; }
		
      var defaults = {
        container   : '',
        modal       : true,
        resizeable  : false,
        width       : 500,
        title       : 'Register to our Beta',
        beforeOpen  : function(container) {},
        onSuccess   : function(container) {},
        onError     : function(container) {}
      };
      
      var opts = $.extend({}, defaults, options);
      
      this.each(function() {
        var $this = $(this);
      
        if (!$this.is('a') || $this.attr('href') == '') { return ; }
      
			  var src = $this.attr('href') + ' ' + opts.container;
			  var formDOM = $("<div />").load(src, function() {
				  $('#popUpHide').append(formDOM);
				
				  $(opts.container).dialog({
					  autoOpen  : false,
					  width     : opts.width,
  					modal     : opts.modal,
  					resizable : opts.resizeable,
  					title     : opts.title
  				});
			  
  				$(opts.container).bind('submit', function(e) {
  					e.preventDefault();
  					ajaxSubmit($this[0]);	
  				});
				
  				$this.bind('click', function(e) {
  					e.preventDefault();
  					opts.beforeOpen.call($this[0], opts.container);
  					$(opts.container).dialog('open');
  				});	
  			});
      });
		
		  function ajaxSubmit(anchorObj) {
			  console.log(anchorObj);
			  var form 	= $(opts.container);
			  var method 	= form.attr('method') || 'GET';
			    $.ajax({
				    type    : method,
				    url     : form.attr('action'),
				    data    : form.serialize(),
				    success : function() {
					    $(opts.container).dialog('close');
					    opts.onSuccess.call(anchorObj, opts.container);	
				      },
				    error	  : function() {
					    opts.onError.call(anchorObj, opts.container);
				    }
			    });
		  }
    }
})(jQuery);