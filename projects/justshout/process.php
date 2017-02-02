<?php
	
	include 'database.php';

	//checking if form is submitted or not 

	if (isset($_POST['submit'])) {
		$username = mysqli_real_escape_string ($con, $_POST['username']);
		$message = mysqli_real_escape_string ($con, $_POST['message']);

		//Select timezome 

		date_default_timezone_set('Asia/Calcutta');
		$time = date('h:i:s a', time());
	}

	//form validation 

	if (!isset($username) || $username == '' || $message == '' || !isset($message)) {
		$error = "Error ! Fill Again";
		header("Location:index.php?error=".urlencode($error));
	}

	else {

		$query = "INSERT INTO shouts (username, message, time) 
				  VALUES ('$username', '$message', '$time')";
		
		if (!mysqli_query($con, $query)) {
			die("Error fialed to insert into database".mysqli_connect_error($con));
		}
		else {
			header("Location: index.php");
			exit();
		}
	}


?>