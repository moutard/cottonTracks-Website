<?php
$username = "cottontracks";
$password = "ctdb55qC";
$hostname = "mysql51-38.perso";

// Variable post by the invite beta form.
$email = $_POST['email'];
if($email){

  // Open a connection only if needed.
  //$username = "root";
  //$password = "root";
  //$hostname = "127.0.0.1";

  // $con = mysql_connect($hostname, $username, $password);
  //   if (!$con) {
  //     die('Could not connect: ' . mysql_error());
  //   }


  // if(filter_var($email, FILTER_VALIDATE_EMAIL)){
  //     // email is valid
  //     // TODO(rmoutard) : check that email is unique.
  //    mysql_select_db("cottontracks", $con);
  // 
  //    $sql="INSERT INTO clients (email)
  //    VALUES
  //    ('$email')";
  // 
  //     if (!mysql_query($sql,$con)) {
  //       $form_message = 'Something went wrong during the request. Please try again later.';
  //      die('Error: ' . mysql_error());
  //     } else {
      $form_message = "Thanks for registering for an invite, we'll let you know as soon as your access has been created";
      // send an email to contact to add it manually.
      $to = "blue@cottontracks.com";
      $subject = "[URGENT] Invitation private beta";
      $message = "A new client ask for an inviation. His email is ".$email." ";
      $from = "social@cottontracks.com";
      $headers = "From:" . $from;
      mail($to,$subject,$message,$headers);
    // }
  } else {
     $form_message = 'This is not a valid email address';
  }
  // mysql_close($con);
// }
?>