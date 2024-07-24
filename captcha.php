<?php
session_start();

header('Content-Type: image/png');

$image = imagecreatetruecolor(120, 40);
$background = imagecolorallocate($image, 255, 255, 255);
$foreground = imagecolorallocate($image, 0, 0, 0);

imagefilledrectangle($image, 0, 0, 120, 40, $background);

$font = __DIR__ . '/arial.ttf';
$captcha_code = '';
for ($i = 0; $i < 6; $i++) {
    $captcha_code .= chr(rand(65, 90));
}

$_SESSION['captcha_code'] = $captcha_code;

imagettftext($image, 20, 0, 10, 30, $foreground, $font, $captcha_code);

imagepng($image);
imagedestroy($image);
?>
