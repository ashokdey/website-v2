<?php
	//connect to mySQL

	$con = mysqli_connect("mysql.hostinger.in", "u655761021_frost", "&*()ashok!@#$", "u655761021_mydb");

	//testing connection

	if (mysqli_connect_errno()) {
		echo "Failed to connect to the database ". mysqli_connect_error();
	}
?>