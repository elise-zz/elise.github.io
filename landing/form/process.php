<?php

$name = $_POST['name'];
$email = $_POST['email'];
$web = $_POST['web'];
$message = $_POST['message'];
// Define your destination email
$dest = "youremail@domain.com"; 
 
$headers = "From: $name <$email>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
$asunto = "Contact form";
$cuerpo = "Name: ".$name."<br>";
$cuerpo .= "Email: ".$email."<br>";
$cuerpo .= "Website: ".$web."<br>";
$cuerpo .= "Message: ".$message;
 
if($name != '' && $email != '' && $web != '' && $message != ''){
    mail($dest,$asunto,$cuerpo,$headers);
}
?>