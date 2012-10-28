<?php
$username = "cottontracks";
$password = "ctdb55qC";
$hostname = "mysql51-38.perso"; 

$con = mysql_connect($username, $password, $hostname);
if (!$con) {
  die('Could not connect: ' . mysql_error());
}

// some code
$email = $_POST['email'];
if($email){		
  if(filter_var($email, FILTER_VALIDATE_EMAIL)){ 
  	//L'email est bonne
  	mysql_select_db("cottontracks", $con);

  	$sql="INSERT INTO Clients (email)
		VALUES
		('$email')";

		if (!mysql_query($sql,$con)) {
  		die('Error: ' . mysql_error());
  	}
  }
}

mysql_close($con);

?>