<?php

	require_once('connectvars.php');
	require_once( 'functions.php' );
	
	$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME)or die('Gone');
	
	/*Registration Validation*/
	if( array_key_exists('u_name', $_GET ) )
	{
		$username = mysqli_real_escape_string($dbc,trim($_GET['u_name']));
		if( mysqli_num_rows( mysqli_query($dbc, "SELECT userId FROM user_details WHERE userName = '$username' " )) == 1 )
			echo '<i>Not Available</i>';
		else
			echo '<i>Available</i>';
	}
	
	if( array_key_exists('email',$_GET ) )
	{
		$em = mysqli_real_escape_string($dbc,trim($_GET['email']) );
		if( isemail( $em) )
		{
			if ( mysqli_num_rows( mysqli_query( $dbc, "SELECT userId FROM user_details WHERE emailId = '$em' " ) ) == 1 )
				echo '<i>Not Available</i>';
			else
				echo '<i>Valid</i>';
		}
		else
			echo '<i>Invalid</i>';
	}
	/*End of Registraion Validation*/
	
	/*Log-in Validation*/
	if( array_key_exists('emailid',$_GET) )
	{
		$email = mysqli_real_escape_string($dbc,trim($_GET['emailid']));
		if( isemail( $email ) )
		{
			if( mysqli_num_rows(mysqli_query($dbc,"SELECT userId FROM user_details WHERE emailId = '$email'") ) == 1 )
				echo 'Valid';
			else
				echo 'Not Registered';
		}
		else
			echo 'Invalid';
	}
	/*End of Log-in Validation*/
	
	mysqli_close($dbc);
?>