<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
  //Server settings
  $mail->SMTPDebug = 0;                                 // Enable verbose debug output
  $mail->isSMTP();                                      // Set mailer to use SMTP
  $mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
  $mail->SMTPAuth = true;                               // Enable SMTP authentication
  $mail->Username = 'valeravilks@yandex.ru';                 // SMTP username
  $mail->Password = 'H5yY883U';                           // SMTP password
  $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
  $mail->Port = 465;                                    // TCP port to connect to
  $mail -> CharSet = "UTF-8";

  //Recipients
  $mail->setFrom('valeravilks@yandex.ru', 'Заявки с сайта');
  $mail->addAddress('valeravilks@gmail.com', 'Valera');     // Add a recipient

  //Content
  $mail->isHTML(true);                                  // Set email format to HTML
  $mail->Subject = 'Заявка на разработку сайта';
  $mail->Body    = $_GET['content'];

  $mail->send();
  echo true;
} catch (Exception $e) {
  echo false;
}