<?php
    include 'db.php';

    // creating quries
    $query = "SELECT * FROM chats ORDER BY id DESC";


    // Using custom time format using the following function
    // $customTime = date('d M Y - D, h:i A', strtotime($row['time']));
    // Setting timezone
    date_default_timezone_set('Asia/Kolkata');
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>JustShout v.2.0</title>
        <link href="favicon.png" rel="shorcut icon">
        <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>  <link type="text/css" rel="stylesheet" href="css/font-awesome.min.css"/>
        <link type="text/css" rel="stylesheet" href="css/style.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <script type="text/javascript">
            'use strict';
            function ajax() {
                var req = new XMLHttpRequest();

                req.onreadystatechange = function() {
                    if (req.readyState == 4 && req.status == 200) {
                        document.getElementById('threads').innerHTML = req.responseText;
                    }
                };
                req.open('GET', 'threads.php', 'true');
                req.send();
            }
            setInterval(function(){
                ajax();
            }, 2500);
        </script>
    </head>
    <body onload="ajax();">
        <header class="intro teal darken-3 z-depth-3">
            <h3 class="grey-text text-lighten-5">JustShout</h3>
            <h6 class="grey lighten-5 round grey-text text-darken-3">Keep shouting together !</h6>
        </header>
        <section class="holder container"> <!-- // Chat Holder-->
            <section class="chatbox card-panel teal darken-3"> <!-- // ChatBox -->
                <div id="threads" class="chat-thread teal darken-1 col s12 z-depth-1">
                    <!-- // Chat Thread Holder -->
                </div> <!-- // Chat Thread Holder -->
                <div class="user-input s12"> <!-- // user input -->
                    <form class="col s12" action="index.php" method="post">
                        <div class="row">
                            <div class="input-field col s4">
                              <i class="material-icons prefix" style="color:#fff;">account_circle</i>
                              <input id="username" name="username" type="text" class="validate" required placeholder= "Your Name">
                            </div>
                            <div class="input-field col s8">
                              <i class="fa fa-comments prefix" style="color:#fff;"></i>
                              <input id="message" type="text" name="message" class="validate" required placeholder="Your Shout !">
                            </div>
                          </div>
                          <?php if (isset($_GET['error'])) : ?>
                              <div class="row">
                                  <div class="error col s6 offset-s2 red darken-4 grey-text text-lighten-4">
                                      <?php echo $_GET['error']; ?>
                                  </div>
                              </div>
                          <?php endif; ?>
                          <div class="row">
                              <div class="col s6 offset-s4">
                                  <button class="btn waves-effect waves-light btn-large round-2" type="submit" name="submit">Shout it !
                                      <i class="fa fa-rocket right"></i>
                                    </button>
                              </div>
                          </div>
                    </form>
                </div>  <!-- // user input -->
            </section>  <!-- // ChatBox -->
        </section> <!-- // Chat Holder-->
        <footer>
            <h6 class="teal-text text-darken-4">Made with <i class="fa fa-heart red-text"></i></h6>
            <h6 class="teal-text text-darken-4">Copyright (c) 2016 <a href="http://ashokdey.in" target="_blank" class="red-text text-darken-4">AshokDey</a> All Rights Reserved.</h6>
        </footer>
    </body>
</html>

<?php
	include 'db.php';

	//checking if form is submitted or not
	if (isset($_POST['submit'])) {
		$username = mysqli_real_escape_string ($con, $_POST['username']);
		$message = mysqli_real_escape_string ($con, $_POST['message']);
	}

	//form validation
	if (!isset($username) || $username == '' || $message == '' || !isset($message)) {
		$error = "Error ! Fill Again";
	}
	else {
		$query = "INSERT INTO chats (username, message)
				  VALUES ('$username', '$message')";

		if (!mysqli_query($con, $query)) {
			die("Error fialed to insert into database".mysqli_connect_error($con));
		}
		else {
            //header("Location: index.php");
			echo '<embed loop="false" src=sound.mp3 hidden="true" autoplay="true">';
		}
	}


?>
