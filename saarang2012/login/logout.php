<?php

	require_once('startsession.php');
	require_once('connectvars.php');
	
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
	$query = "UPDATE user_details SET lastVisitDate = NOW() WHERE userId = '".base64_decode($_SESSION['saar_log_id'])."' ";
	mysqli_query($dbc,$query) or die('Error');
	
	if(isset($_SESSION['saar_log_id']))
	{
		$_SESSION=array();
		if(isset($_COOKIE[session_name()]))
			setcookie(session_name(),'',time()-3600);
		session_destroy();
	}
	if(isset($_COOKIE['stay']))
	{
		setcookie('saar_log_id','',time()-3600);
		setcookie('saar_log_name','',time()-3600);
	}
	$home_url='http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/index.php';
	header('Location: '.$home_url);
?>
