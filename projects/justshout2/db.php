<?php
    // Creating variables
    $host = "mysql.hostinger.in";
    $dbUsername = "u655761021_frost";
    $dbPassword = "&*()ashok!@#$";
    $dbName ="u655761021_mydb";

    //connect to mySQL
	$con = mysqli_connect($host, $dbUsername, $dbPassword, $dbName);

    //testing connection
    if (!$con){
        die("Connection error: " . mysqli_connect_error());
    }
?>
