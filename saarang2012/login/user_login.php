<?php
	require_once('startsession.php');
	require_once('connectvars.php');
	require_once('functions.php');
	
	$dbc=mysqli_connect(DB_HOST,DB_USER,DB_PASSWORD,DB_NAME) or die('Runaway');
	$email=mysqli_real_escape_string($dbc,trim($_GET['emailId']));
	$password=mysqli_real_escape_string($dbc,trim($_GET['password']));
	$stay=mysqli_real_escape_string($dbc,trim($_GET['stay']));
	$msg = "";
	
	if(!empty($email) and !empty($password) )
	{
		$query = "SELECT userId, userName, activation,emailId FROM user_details WHERE emailId='$email' AND password=SHA('$password')";
		$data = mysqli_query($dbc,$query) or die('Error querying database');

		if(mysqli_num_rows($data) == 1)
		{
			$row = mysqli_fetch_array($data);
			if( $row['activation']  == 1 )
			{
				//$_SESSION['saar_log_email']=base64_encode($row['emailId']);
				$_SESSION['saar_log_name'] = base64_encode($row['userName']);
				$_SESSION['saar_log_id'] = base64_encode($row['userId']);
				setcookie('saar_log_id',$_SESSION['saar_log_id'],time()+(60*60*24*5));
				setcookie('saar_log_name',$row['saar_log_name'],time()+(60*60*24*5));

				($stay == 1) ? setcookie('stay',$stay,time()+(60*60*24*5)) : setcookie('stay','',time()-3600);
				
				$msg = '<p>You are logged in as '.$row['userName'].'</p>';
			}
			else
				$msg = '<p>please click the link sent to your email to activate your account</p>';
		}
		else
			$msg='<p>Sorry, you must enter a valid username and password to log in.</p>';
	}
	else
		$rmsg='<p>Sorry, you must enter your username and password to log in.</p>';
	
	echo $msg;
	mysqli_close($dbc);
?>