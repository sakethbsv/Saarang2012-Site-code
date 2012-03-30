<?php

	session_start();
	if(!isset($_SESSION['saar_log_id']))
	{
		if(isset($_COOKIE['saar_log_id']) and isset($_COOKIE['saar_log_name']) and isset($_COOKIE['stay']))
		{
	  		$_SESSION['saar_log_id']=$_COOKIE['saar_log_id'];
	  		$_SESSION['saar_log_name']=$_COOKIE['saar_log_name'];
	  	}
	  	else if(!isset($_COOKIE['stay']) and isset($_COOKIE['saar_log_id']) and isset($_COOKIE['saar_log_name']))
	  	{
	  		setcookie('saar_log_id','',time()-(60*60*24*10));
			setcookie('saar_log_name','',time()-(60*60*24*10));
		}
	}

?>
