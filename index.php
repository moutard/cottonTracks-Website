<?php
//$username = "cottontracks";
//$password = "ctdb55qC";
//$hostname = "mysql51-38.perso";

// Variable post by the invite beta form.
$email = $_POST['email'];
if($email){

  // Open a connection only if needed.
  $username = "root";
  $password = "root";
  $hostname = "127.0.0.1";

  $con = mysql_connect($hostname, $username, $password);
  if (!$con) {
    die('Could not connect: ' . mysql_error());
  }


  if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    // email is valid
    // TODO(rmoutard) : check that email is unique.
  	mysql_select_db("cottontracks", $con);

  	$sql="INSERT INTO clients (email)
		VALUES
		('$email')";

    if (!mysql_query($sql,$con)) {
      $form_message = 'Something went wrong during the request. Sorry try later.';
  		die('Error: ' . mysql_error());
    } else {
      $form_message = 'An invitation will be sent in few minutes.';
      // send an email to contact to add it manually.
      $to = "contact@cottontracks.com";
      $subject = "[URGENT] Invitation private beta";
      $message = "A new client ask for an inviation. His email is ".$email." ";
      $from = "social@cottontracks.com";
      $headers = "From:" . $from;
      mail($to,$subject,$message,$headers);
    }
  } else {
     $form_message = 'This is not a valid adress email';
  }
  mysql_close($con);
}


?>

<!DOCTYPE html PUBLIC "-//w3c//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="fr" itemscope itemtype="http://schema.org/Product">

<head>
	<title>cottonTracks</title>
    <meta http-equiv="Content-Type" content = "text/html; charset=utf-8"/>
    <!--<link rel="stylesheet" media ="screen" type="text/css" title="design" href="index.css"/>-->
    <link rel="icon" type="image/vnd.microsoft.icon" href="http://www.cottontracks.com/images/cTfav16BW.png">
	<script type="text/javascript" src="javascript/ga.js"></script>
	<script type="text/javascript" src="javascript/konami.js"></script>
	<script type="text/javascript" src="lib/jquery.min.js"></script>
	<script type="text/javascript" src="javascript/index.js"></script>
	<link rel="stylesheet/less" type="text/css" href="index.less" />
	<!-- less script should be after .less file -->
	<script type='text/javascript' src='lib/less.js'></script>
	<!-- +1 snippet personalisation -->
	<meta property="og:title" content="cottonTracks - remember the best of what you browse" />
	<meta property="og:image" content="https://lh6.googleusercontent.com/-lMmYlLDR2yg/AAAAAAAAAAI/AAAAAAAAABk/a82djdpBu2M/s250-c-k/photo.jpg" />
	<meta property="og:description" content="cottonTracks is a browser extension that lets you easily remember the best of what you browse. Check it out on www.cottontracks.com" />
</head>

<body>
<!-- SDK Javascript Facebook -->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
		fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	</script>

	<div id="header">
		<div class="content_column">
			<div id="logo">
				<a href="#"><img src="images/cT_logo.png" alt="cottonTracks logo"></a>
			</div>
			<div class="separation"></div>
			<a href="team.html"><div class="page"><p>Meet the Team</p></div></a>
			<div class="separation"></div>
			<a href="blog.html"><div class="page"><p>Read our Blog</p></div></a>
			<div class="separation"></div>
			<a href="contact.html"><div class="page"><p>Drop us a Line</p></div></a>
			<div class="separation"></div>
		</div>
	</div>
	<div id="leather">
		<div class="content_column">
      <div id="door">
				<img class="ct-lens_door" src='images/lens_door.png'>
			</div>

      <div class="ct-lens">
		        <img class="cache" src="images/gears_cache.png">
		        <div class='shadow'></div>
		        <div class='glass'></div>
		        <div class="gear gear1">
		          <img class="shine animate" src="images/gear1.png" >
				  <img class="perspective animate" src="images/gear1_perspective.png" >
				  <img class="shadow animate" src="images/gear1_shadow.png" >
		          <img class="middlescrew" src="images/lens_gears1_middlescrew.png">
		        </div>

		        <div class="gear gear2">
		          <img class="shine animate" src="images/gear2.png" >
		          <img class="perspective animate" src="images/gear2_perspective.png" >
				  <img class="shadow animate" src="images/gear2_shadow.png" >
		          <img class="middlescrew" src="images/lens_gears1_middlescrew.png">
		        </div>

		        <div class="gear gear3">
		          <img class="shine animate" src="images/gear3.png" >
		          <img class="perspective animate" src="images/gear3_perspective.png" >
				  <img class="shadow animate" src="images/gear3_shadow.png" >
		        </div>

		        <div class="gear gear4">
		          <img class="shine animate" src="images/gear4.png" >
		          <img class="perspective animate" src="images/gear4_perspective.png" >
				  <img class="shadow animate" src="images/gear4_shadow.png" >
		        </div>
			</div>
			<div id="tagline">Turn your Google Chrome into a powerful personal web memory engine.</div>
		</div>
	</div>
	<div id="transition">
		<div class="content_column">
			<div id="request_bg">
				<div id="request_button"><p>Request an invite</p></div>
			</div>
		</div>
	</div>
	<div id="badges">
		<div class="content_column">
			<div class="restricted_column">
				<div class="badge">
					<div class="picto"><img src='images/best_browsed.png' alt='only_the_best picto'></div>
					<h3>The Best of what you browsed</h3>
					<p>cottonTracks is a browser extension<br/>
					that remembers the web just like you.<br/>
					Keep your memorable content and<br/>
					forget about the noise.</p>
				</div>
				<div class="badge">
					<div class="picto"><img src='images/accuracy.png' alt='accuracy picto'></div>
					<h3>Automated and Accurate</h3>
					<p>We understands what elements<br/>
					of a page you judge interesting<br/>
					and aggregate with other content<br/>
					from the same subject.</p>
				</div>
				<div class="badge">
					<div class="picto"><img src='images/privacy.png' alt='privacy picto'></div>
					<h3>Parse content, not people</h3>
					<p>Your name, email address or the age<br/>
					of your grandma’s dog are not required<br/>
					to use the service. Just install it<br/>
					and enjoy!</p>
				</div>
			</div>
		</div>
	</div>
	<div id="screenshot">
		<div id="stripe_bg">
		</div>
		<div class="content_column">
			<div id="stripe">
			</div>
			<div id="laptop">
				<img src='images/ordi.png' alt='cottonTracks screenshot'>
				<img id='kittens' src='images/kitty_screenshot.png' alt='meow'>
			</div>
			<div class="dot milk milk_fade fade">
			</div>
			<div class="dot milk">
				<div class="hint">
					<img id="meow" src="images/kitty.png">
					<h3> Meoww…</h3>
				</div>
			</div>
			<div class="dot tab tab_fade fade">
			</div>
			<div class="dot tab">
				<div class="hint">
					<p>Just hit "New Tab"
					and your latest content discovery
					will be displayed in context.</p>
				</div>
			</div>
			<div class="dot sticker sticker_fade fade">
			</div>
			<div class="dot sticker">
				<div class="hint">
					<p>Each thumbnail contains
					the best of what you browsed
					about a given subject.</p>
				</div>
			</div>
			<div class="dot element element_fade fade">
			</div>
			<div class="dot element">
				<div class="hint">
					<p>Elements focus on
					the best paragraph, image or video
					you have seen within a page.</p>
				</div>
			</div>
		</div>
	</div>
	<div id="vision">
		<div class="content_column">
			<div class="paragraph">
			<h3>An encyclopedia of your influences</h3>
			<p>When you browse the web, from time to time, a magical discovery happens.
			You start reading about a subject and you end up, an hour later wondering
			how you got to that Wikipedia article about the Roman Empire.
			cottonTracks has been designed to remember those moments and give you insight
			and access into how you discovered it.
			</div>
			<div class="paragraph">
			<h3>The ultimate self curation tool</h3>
			<p>Your stories are developing across multiple pages and represents what interests you
			the most about a subject.
			All of this is automated and you don't even have to think about cottonTracks to use it.
			Once you start exploring, we let you make each story perfect through
			advanced customizations options and share it with the world.</p>
			</div>
		</div>
	</div>
	<div id="invite">
		<div class="content_column">
			<div id='letter_border'></div>
			<div id='stamp'></div>
			<h2>From Beta with Love</h2>
			<p>We are currently running a private beta<br>
			Add your Google Account email to the waiting list,<br>
			and we will send you an invitation for cottonTracks Beta.</p>
			<div id="email_field">
				<form method="post" action="index.php#email_field">
					<?php
            // If the email was sent put it on the field.
            if($email){
              echo '<input id="email" type="text" name="email" value="'.$email.'">';
            } else {
              echo '<input id="email" type="text" name="email" value="Enter your Google Account email">';
            }
          ?>
          <input id="validation" type="submit" value="Invite my account"/>
          <?php
            if($form_message){
              echo '<p class="form_message">'.$form_message.'</p>';
            }
          ?>
				</form>
			</div>
			<div id='pastille'></div>
		</div>
	</div>
	<div id="footer">
		<div class="content_column">
			<div id="sitemap">
				<a href="team.html">Meet the Team</a>
				<a href="blog.html">Read our Blog</a>
				<a href="contact.html">Drop us a Line</a>
			</div>
			<div id="social">
				<div class="fb-like" data-href="http://facebook.com/cottontracks" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false" data-font="lucida grande"></div>
				<a href="https://twitter.com/share" class="twitter-share-button" data-text="I just discovered @cottonTracks, great way to remember the best of what you browse. Check it out!">Tweet</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
				<div class="g-plusone" data-size="medium" data-href="http://www.cottontracks.com" data-expandTo="top"></div>
				<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();</script>
			</div>
		</div>
	</div>
</body>
</html>
