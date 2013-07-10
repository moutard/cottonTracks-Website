<!DOCTYPE html PUBLIC "-//w3c//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" itemscope="" itemtype="http://schema.org/Product">  
<head>
	
	<title>c&#818;o&#818;t&#818;t&#818;o&#818;n&#818;Tracks meets Evernote</title>
	<link rel="icon" type="image/vnd.microsoft.icon" href="http://www.cottontracks.com/media/images/ct-favicon16.png">
	
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=9">

  <link rel="stylesheet" type="text/css" href="devcup_style.css">

	<script type="text/javascript" src="../javascript/ga.js"></script>

	<link rel="chrome-webstore-item" href="https://chrome.google.com/webstore/detail/dlhgdjfkmlhekaogadefnhnmmohnhkcg">
	<script>
		function ExtInstall() {
	  	if (chrome.app.isInstalled) 
	    	alert("already installed!");
	    else 
	    	chrome.webstore.install();
	  }
	</script>

</head>
<body>
  <div id="middle_bg_contact">

    <div class="container">
      <div class="howto_items">
				<img src="../media/images/devcup/screenshot1.png" alt="Screenshot of the App"/>
	      <div id="story_line">	  
	        <h2>cottonTracks meets Evernote</h2>
					<p>Wouldn’t it be great if when you start writing a document,</p>
	        <p>you could have access to all the quotes, images, maps</p>
					<p>and videos you need to embed without having to go back</p>
	        <p>to the internet to find them again?</p>
					<?php 
					include("../functions.php");
					$browser = get_browser_type();
					if($browser=="chrome"||$browser=="chrome-mac"){
						echo '<a href="#" onClick="_gaq.push([\'_trackEvent\', \'Button\', \'Click\', \'Up\']); ExtInstall();"><img src="../media/images/devcup/download.png" alt="Download for Chrome" id="download1"/></a>';
					}
					else{
						echo '<a href="https://chrome.google.com/webstore/detail/dlhgdjfkmlhekaogadefnhnmmohnhkcg" onClick="_gaq.push([\'_trackEvent\', \'Button\', \'Click\', \'Up\']);"><img src="../media/images/devcup/download.png" alt="Download for Chrome" id="download1"/></a>';
					}
					?>
					
	      </div><!-- stroy_line -->
			</div>
		</div>
	  <div id="delimiter1">
	  </div><!--delimiter1-->
	</div>
			
	<div id="middle_bg_2">		
		<div class="container">
      <div class="howto_items">
				<img id="screenshot2" src="../media/images/devcup/screenshot2.png" alt="Screenshot of the App"/>
	      <div id="story_line_right">	  
	        <h2>Create enhanced notes effortlessly</h2>
					<p>With cottonTracks, you will never wished you</p>
					<p>had bookmarked something ever again.</p>
	        <p>Our browser extension remembers for you.</p>
					<p>You don’t need to bookmark anything,</p>
	        <p>our algorithms analyze in detail how you interact</p>
					<p>with each piece of content and record </p>
					<p>the ones you find interesting</p>
	      </div><!-- stroy_line -->
			</div>
    </div><!--container-->
  </div><!--middle_bg-->
	
	<div id="middle_bg_2">		
		<div class="container">
      <iframe width="960" height="600" src="//www.youtube.com/embed/0GdQZS-tMfs" frameborder="0" allowfullscreen></iframe>
    	<?php
			if($browser=="chrome"||$browser=="chrome-mac"){
				echo '<a href="#" onClick="_gaq.push([\'_trackEvent\', \'Button\', \'Click\', \'Down\']); ExtInstall();"><img src="../media/images/devcup/download.png" alt="Download for Chrome" id="download2"/></a>';
				}
				else{
					echo '<a href="https://chrome.google.com/webstore/detail/dlhgdjfkmlhekaogadefnhnmmohnhkcg" onClick="_gaq.push([\'_trackEvent\', \'Button\', \'Click\', \'Down\']);"><img src="../media/images/devcup/download.png" alt="Download for Chrome" id="download2"/></a>';
				}
				?>
			<div id="story_line_botton">
				<p>Visit our website: <a href="http://cottontracks.com">cottonTracks.com</a></p>
			</div>
		</div><!--container-->
  </div><!--middle_bg-->
	
	<div id="middle_bg_2">		
		<div class="container">
		</div><!--container-->
  </div><!--middle_bg-->

</body>
</html>