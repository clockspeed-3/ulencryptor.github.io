<?php
if(isset($_POST))
{
	$yourname = $_POST['yourname'];
	$email=$_POST['email'];
	$tellus = $_POST['tellus'];
	
	$to = "megha.r@ults.in";
	$subject = "Contact From User";
	$headers = "From:". $email . "\r\n";

$mailsend = mail($to,$subject,$tellus,$headers);
if($mailsend == 1)
{
	echo 1;
}
else
{
	echo 0;
}
}
?>