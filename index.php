<?php 

 /* if($_SERVER['PHP_AUTH_USER'] !== 'demo' && $_SERVER['PHP_AUTH_PW'] !== 'demo1234') 
  {
  		header("WWW-Authenticate: Basic realm=\"thetutlage\"");
  		header("HTTTP\ 1.0 401 Unauthorized");
  		echo 'There is error';
  		exit;
  }*/

header( 'Location: ./main.html' );

?>
