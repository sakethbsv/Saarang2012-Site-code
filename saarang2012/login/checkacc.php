<?php
	require_once('startsession.php');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Registration</title>
<link rel="stylesheet" href="reg_style.css" type="text/css" />
<script src="jquery-1.6.4.min.js" type="text/javascript"></script>
<script src="reg_validate.js" type="text/javascript" ></script>
</head>

<body>
<?php
	require_once('connectvars.php');
		
	if(!isset($_SESSION['saar_log_name']))
	{
		$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
		$den_username = base64_decode($_GET['in']);
		$data = mysqli_query($dbc, "SELECT userId, activation FROM user_details WHERE userName = '".$den_username."'" );
		if( mysqli_num_rows($data) === 1 )
		{
			$row = mysqli_fetch_array($data);
			if( $row['activation']== 0 )
			{
				$saar_id = preg_replace("/\d{".strlen(strval($row['userId']))."}$/",strval($row['userId']), "SA12W00000" );
				$chk = mysqli_query($dbc, "UPDATE user_details SET activation = 1 , saarangId = '$saar_id' WHERE userId='".$row['userId']."'" );
				if( $chk )
				{
					echo '<p class="login">Your account has been activated. Your Saarang Id is '.$saar_id.
					'. Please <a href="login.php">login</a> as '.$den_username.' to continue.</p>';
				}
				else
					echo 'There is some problem without your account activation';
			}
			else
				echo 'Your account is already activated';
		}
		else
			echo 'Please <a href="signup.php">sign-up</a> to create the account';
	}
	else
	{
		echo 'Logged In';
		//$home_url= 'http://'.$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).'/home.php';
		//header('Location: '.$home_url);
	}

?>
