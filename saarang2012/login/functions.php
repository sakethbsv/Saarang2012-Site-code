<?php
	
	require_once('connectvars.php');
	
	function isemail( $email ) 
	{
		$string_format = '/^[a-zA-Z0-9][a-zA-Z0-9\._\-&!?=#]*@/';
		if( preg_match( $string_format, $email ) )
			return checkdnsrr( preg_replace( $string_format,'',$email ) );
		
		return false;
	}
	
	function get_escaped_input( $inputs )
	{
		$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
		$escaped_inputs = array();
		foreach ( $inputs as $key => $value )
				$escaped_inputs[$key] = mysqli_real_escape_string($dbc,trim($value));

		return $escaped_inputs;
		mysqli_close($dbc);
	}
	
	function check_empty( $inputs )
	{
		foreach( $inputs as $key => $value )
			if( empty( $inputs[$key] ) )
				return false;
		return true;
	}
?>	