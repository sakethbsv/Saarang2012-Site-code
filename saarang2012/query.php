<?php

	//I guess no one has put any data in the database
	//so for testing put some sample data and test
	//If it doesnot work, let me know
	
	$var = trim($_GET['event']);
	$dbc = mysqli_connect('localhost','saarango','saar4ro0rg','saarango_events')or die('error');
	$var = mysqli_real_escape_string($dbc, $var );
	$query = "SELECT old_details, old_rules, contact FROM event_details WHERE event_name LIKE '$var' ";
	$data = mysqli_query($dbc,$query);
	$doc = new DOMDocument('1.0');
	$toremove = array("(",")"," ");
	$r = $doc->createElement( str_replace("$","s",str_replace($toremove,"",$var) ));
	$doc->appendChild( $r );
	$row = mysqli_fetch_assoc($data);
	foreach( $row as $fieldname => $fieldvalue )
	{
		$tag = $fieldname;
		if( $fieldname == "old_details" )
			$tag = "new_details";
		else if( $fieldname == "old_rules" )
			$tag = "new_rules";
		if( empty($fieldvalue) )
			$fieldvalue = "Coming Soon. Please check back later";		
		$author = $doc->createElement( $tag );
		$author->appendChild( $doc->createTextNode( $fieldvalue ));
		
		$r->appendChild( $author );
	}
	mysqli_close($dbc);
	
	$xml_string = $doc->saveXML();
	echo $xml_string;

?>