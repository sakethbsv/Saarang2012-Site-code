<?php

	require_once('startsession.php');
	require_once('connectvars.php');
	require_once('functions.php');

	$user_inputs = array();
	$user_inputs = get_escaped_input( $_GET['user_data'] );		
	$msg = "";

	if( check_empty($user_inputs) and $user_inputs['password1'] == $user_inputs['password2'] )
	{
		$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) or die('Error connecting database');
		$query="SELECT userId FROM user_details WHERE userName = '".$user_inputs['username']."'";
		$data = mysqli_query($dbc,$query) or die('Error querying database');
		
		if( mysqli_num_rows( $data ) == 0 )
		{
			if( isemail($user_inputs['email']) )
			{
				$query = "INSERT INTO user_details ";
				$query .= " ( fullName, userName, password, college, collegeId, emailId, gender, city, state, registerDate, lastVisitDate ) VALUES ";
				$query .= " ( '".$user_inputs['fullname']."', '".$user_inputs['username']."', SHA('".$user_inputs['password1']."'), ".
							"'".$user_inputs['college']."', '".$user_inputs['collegeid']."',  '".$user_inputs['email']."' , ".
							"'".$user_inputs['gender']."', '".$user_inputs['city']."', '".$user_inputs['state']."', NOW(), NOW() ) ";
				mysqli_query($dbc,$query) or die('Error');
							/* Sending e-mail to the participant */

				$to = $user_inputs['email'];
				$sub='Account activation';
				$en_username=base64_encode($user_inputs['username']);
				$msg="Please click on the below link or copy paste the url in the address bar of your browsers".
					" to activate your account \n http://".$_SERVER['HTTP_HOST'].dirname($_SERVER['PHP_SELF']).
					"/checkacc.php?in=".$en_username;
				$from="No-Reply Saarang 2012 <no-reply@saarang.org>";				

				mail($to,$sub,$msg,"From : ".$from) or die('Error signing in');

				$msg = '<p>Your new account has been succesfully created. You need to click the link sent to your email '.
				 		'to activate your account.<p>';
				mysqli_close($dbc);
			}
			else
				$msg = '<p class="error">Please enter a valid email address</p>';
		}
		else
			$msg = '<p class="error">An account already exists for this username. Please use a different username';
	}
	else
		$msg ='<p class="error">You must enter all the details, including the desired password twice';

	echo  $msg;
?>