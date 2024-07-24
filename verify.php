<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_captcha = $_POST['captcha'];
    $server_captcha = $_SESSION['captcha_code'];

    if ($user_captcha === $server_captcha) {
        echo "CAPTCHA verified successfully!";
    } else {
        echo "CAPTCHA verification failed!";
    }
}
?>
