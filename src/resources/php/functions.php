<?php

class Database extends SQLite3 {
  function __construct() {
     $this->open("database.sqlite3");
  }
}

function isTextContainsSpecial($text) {
  $FORBIDDEN_STRINGS = ["<html", "</a>", "src=", "href="];

  foreach ($FORBIDDEN_STRINGS as $STR) {
    if (strpos($text, $STR) !== false) {
      return true;
    }
  }
  return false;
}

function buildResponse($type, $message) {
  $response = new \stdClass();
  $response->type = $type;
  $response->message = $message;
  return json_encode($response);
}

function isTokenValid($token, $ip) {
  $db = new Database();

  $stm = $db->prepare("SELECT COUNT(*) as count FROM token WHERE token = :token and valid = 1 AND ip = :ip");
  $stm->bindValue(":token", htmlspecialchars($token));
  $stm->bindValue(":ip", htmlspecialchars($ip));

  $nbLines = $stm->execute()->fetchArray()["count"];

  $db->close();

  return $nbLines > 0;
}

function invalidateToken($token, $ip) {
  $db = new Database();

  $stm = $db->prepare("UPDATE token SET valid = 0 WHERE token = :token AND ip = :ip");
  $stm->bindValue(":token", htmlspecialchars($token));
  $stm->bindValue(":ip", htmlspecialchars($ip));

  $stm->execute();

  $db->close();
}

function generateNewToken($ip) {
  $db = new Database();

  $token = uniqid();
  $stm = $db->prepare("INSERT INTO token (token, valid, ip, date) VALUES (:token, 1, :ip, :date)");
  $stm->bindValue(":token", $token);
  $stm->bindValue(":ip", htmlspecialchars($ip));
  $stm->bindValue(":date", date("D M d, Y G:i"));

  $stm->execute();
  
  $db->close();

  return $token;
}

function sendMessage($token, $ip, $name, $email, $message) {

  include "lib/PHPMailer/src/PHPMailer.php";
  include "lib/PHPMailer/src/Exception.php";
  include "lib/PHPMailer/src/SMTP.php";
  
  include "params.inc.php";

  if(isTextContainsSpecial($message)) {
    return "Your message contains HTML or special characters.<br/>Please remove it and retry.";
  }

  $db = new Database();

  if($token == NULL || !isTokenValid($token, $ip)) {
    return "Invalid Token!";
  }

  invalidateToken($token, $ip);

  $stm = $db->prepare("INSERT INTO message(name, email, message, token, ip, date) VALUES (:name, :email, :message, :token, :ip, :date)");
  $stm->bindValue(":name", htmlspecialchars($name));
  $stm->bindValue(":email", htmlspecialchars($email));
  $stm->bindValue(":message", htmlspecialchars($message));
  $stm->bindValue(":token", htmlspecialchars($token));
  $stm->bindValue(":ip", $ip);
  $stm->bindValue(":date", date("D M d, Y G:i"));

  $stm->execute();

  $db->close();

  $mailer = new PHPMailer\PHPMailer\PHPMailer(true);

  try {
    $mailer->setFrom($GMAIL_USERNAME, $GMAIL_USERNAME);
    $mailer->addAddress($DEST_EMAIL_ADDRESS, $DEST_EMAIL_ADDRESS);
    $mailer->Subject = "CHBE.FR : new message !";
    $mailer->Body = "Message from ".htmlspecialchars($name)."(".htmlspecialchars($email)."):".htmlspecialchars($message);

    $mailer->isSMTP();
    $mailer->Host = "smtp.gmail.com";
    $mailer->SMTPAuth = true;
    $mailer->SMTPSecure = "tls";
    $mailer->Port = 587;
    
    $mailer->Username = $GMAIL_USERNAME;
    $mailer->Password = $GMAIL_PASSWORD;
    
    $mailer->send();
  } catch (Exception $e) {
     return $e->errorMessage();
  }
  return "";
}
