<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "katariina.ingerma@gmail.com"; // Your email address
    $subject = "New message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Sõnum saadetud!";
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo "Error: Sõnumit ei õnnestunud saata.";
    }
}
?>
