<?php
	include 'database.php';
?>

<?php 
	// Creating select query 
	
	$query = "SELECT * FROM shouts";
	$shouts = mysqli_query($con, $query);
	
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Just Shout - Keep saying...</title>
	<link rel="stylesheet" type="text/css" href="./css/style.css">
</head>
<body>
	<div id="container">
		<header>
			<h1>Just Shout !!</h1>
		</header>

		<div id="shout">
			<ul>
				<?php while($row = mysqli_fetch_assoc($shouts)) : ?>
		
					<li class="shouts"><span><?php echo $row['time']; ?> &nbsp;&nbsp;-&nbsp;&nbsp;</span>
					<span class="uname" ><?php echo $row['username']; ?>:</span> 
					<?php echo $row['message']; ?></li>

				<?php endwhile; ?>

			</ul>
		</div>
			<div id="input">
				<?php if (isset($_GET['error'])) : ?>
					<div class="error">
						<?php echo $_GET['error']; ?>
					</div>
				<?php endif; ?>
				<form method="post" action="process.php">
					<input type="text" name="username" placeholder="Enter your name" >
					<input type="text" name="message" placeholder="Enter message" >
					<br/>
					<input type="submit" name="submit" value="Shout It Out !" class="shout-btn">

				</form>
			</div>
	</div>
</body>
</html>