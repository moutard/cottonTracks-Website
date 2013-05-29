jQuery(document).ready(function($){
	
	var triangle_size = 24;
	var line_number = 576/triangle_size; //Get the number of line to cover the 576px of the background
	var window_width = $(window).width();
	
	var triangle_width = (Math.floor(window_width/(2*triangle_size))+1)*2*triangle_size+triangle_size; //Add a triangle_size to align the triangle properly
	var triangle_margin = -2*triangle_size*(1-window_width/(4*triangle_size)+Math.floor(window_width/(4*triangle_size)));

	//Set CSS 
	$("#triangle").width(triangle_width);
	$("#triangle").css("margin-left", triangle_margin);
	
	var triangle_number = (triangle_width/triangle_size)*line_number;
	
	//Create the triangles
	function creationTriangles(triangle_count){
		for(i=0; i<triangle_count; i++){
		  $("<div>")
	    .clone(false)
	    .appendTo("#triangle")
	    .addClass("triangle-right");
	    $("<div>")
	    .clone(false)
	    .appendTo("#triangle")
	    .addClass("triangle-left")
		};
	};
	
	//Remove triangle nodes
	function removeTriangles(triangle_count){
		for(i=0; i<(triangle_count); i++){  
			$(triangle_right[i]).remove();
			$(triangle_left[i]).remove();
		};
	};
	
	creationTriangles(triangle_number);
	
	var triangle_right = $('#triangle .triangle-right');
	var triangle_left = $('#triangle .triangle-left');
	
	function setTriangleRightColor(i, tColor){
		$(triangle_right[i]).toggleClass("triangle-right-"+tColor);
	};
	function setTriangleLeftColor(i, tColor){
		$(triangle_left[i]).toggleClass("triangle-left-"+tColor);
	};
	
	function colorLine(i){
		for(j=0; j<triangle_number/line_number; j++){
			var rand_right = Math.floor(10*Math.random());
			if(rand_right<1){
				setTriangleRightColor(i*triangle_number/line_number+j, "0b9b96");
			}
			else if(rand_right<2){
				setTriangleRightColor(i*triangle_number/line_number+j, "0f8692");
			}
			else if(rand_right<3){
				setTriangleRightColor(i*triangle_number/line_number+j, "13688c");
			}
			else if(rand_right<4){
				setTriangleRightColor(i*triangle_number/line_number+j, "0fab9a");
			}
		}
		for(j=0; j<triangle_number/line_number; j++){
			var rand_left = Math.floor(10*Math.random());
			if(rand_left<1){
				setTriangleLeftColor(i*triangle_number/line_number+j, "0b9b96");
			}
			else if(rand_left<2){
				setTriangleLeftColor(i*triangle_number/line_number+j, "0f8692");
			}
			else if(rand_left<3){
				setTriangleLeftColor(i*triangle_number/line_number+j, "13688c");
			}
			else if(rand_left<4){
				setTriangleLeftColor(i*triangle_number/line_number+j, "0fab9a");
			}
		}
	};
	
	function initAnimationTriangle(){
		for(i=0; i<line_number; i++){
			colorLine(i);
		};
	};
	
	function clearTriangle(){
		for(i=0; i<triangle_number; i++){
			$(triangle_right[i]).removeClass('triangle-right-0b9b96');
			$(triangle_right[i]).removeClass('triangle-right-0f8692');
			$(triangle_right[i]).removeClass('triangle-right-13688c');
			$(triangle_right[i]).removeClass('triangle-right-0fab9a');
			$(triangle_left[i]).removeClass('triangle-left-0b9b96');
			$(triangle_left[i]).removeClass('triangle-left-0f8692');
			$(triangle_left[i]).removeClass('triangle-left-13688c');
			$(triangle_left[i]).removeClass('triangle-left-0fab9a');
		}
	}
	
	//Animate the triangle for the 1st time
	initAnimationTriangle();
	
	//Turn triangle to light gray on click
	$("#triangle").click(function(e){
		initAnimationTriangle();
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_right.length * Math.random());
	  setTriangleRightColor(pick, "0b9b96");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_left.length * Math.random());
	  setTriangleLeftColor(pick, "0b9b96");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_right.length * Math.random());
	  setTriangleRightColor(pick, "0f8692");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_left.length * Math.random());
	  setTriangleLeftColor(pick, "0f8692");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_right.length * Math.random());
	  setTriangleRightColor(pick, "13688c");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_left.length * Math.random());
		setTriangleLefttColor(pick, "13688c");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_right.length * Math.random());
	  setTriangleRightColor(pick, "0fab9a");
	});
	
	$("#triangle").mousemove(function(e){
	  pick = Math.round(triangle_left.length * Math.random());
		setTriangleLeftColor(pick, "0fab9a");
	});
	
	$("#triangle").mousemove(function(e){
		console.log(triangle_number);
	});
	
	$(window).resize(function() {
		//Recalculate values at the creation
		window_width = $(window).width();
		triangle_width = (Math.floor(window_width/(2*triangle_size))+1)*2*triangle_size+triangle_size;
		triangle_margin = -2*triangle_size*(1-window_width/(4*triangle_size)+Math.floor(window_width/(4*triangle_size)));
		
		//Update CSS
		$("#triangle").width(triangle_width);
		$("#triangle").css("margin-left", triangle_margin);
		
		var newTriangle_number = (triangle_width/triangle_size)*line_number;
		//triangle_number = (triangle_width/triangle_size)*line_number;
		
		if (newTriangle_number-triangle_number>0){
			creationTriangles(newTriangle_number-triangle_number);
			triangle_number = newTriangle_number;
			triangle_right = $('#triangle .triangle-right');
			triangle_left = $('#triangle .triangle-left');
			initAnimationTriangle();
		}
		else if (newTriangle_number-triangle_number<0){ //to make sure it's !=0. Otherwise it useless to run the next part of the script
			console.log("TEST");
			removeTriangles(triangle_number-newTriangle_number);
			triangle_number = newTriangle_number;
			triangle_right = $('#triangle .triangle-right');
			triangle_left = $('#triangle .triangle-left');
			initAnimationTriangle();
		}
	});
});