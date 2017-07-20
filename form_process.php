<?php
if($_POST["submit"]) {
    $recipient="jf@jamesfoster.com"; //Enter your mail address
    $subject="Contact from Website"; //Subject
    $sender=$_POST["name"];
    $senderEmail=$_POST["email"];
    $message=$_POST["message"];
    $mailBody="Name: $sender\nEmail Address: $senderEmail\n\nMessage: $message";
    mail($recipient, $subject, $mailBody);
	sleep(1);
	header("Location:"); // Set here redirect page or destination page
}
?>
