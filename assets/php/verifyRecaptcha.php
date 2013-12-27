<?php
	require_once('recaptchalib.php');
	$privatekey = "YourPrivateKey";
	$resp = recaptcha_check_answer ($privatekey,
	                            $_SERVER["REMOTE_ADDR"],
	                            $_GET["challenge"],
	                            $_GET["response"]);
	if (!$resp->is_valid) {
	// What happens when the CAPTCHA was entered incorrectly
		echo "The reCAPTCHA wasn't entered correctly. Go back and try it again.";
	} else {
		echo "success";
	}
?>