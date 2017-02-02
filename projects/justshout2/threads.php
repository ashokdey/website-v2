<?php
    include 'db.php';
    // creating quries
    $query = "SELECT * FROM chats ORDER BY id DESC";
    // Fetching rows from table
    $chatThreads = mysqli_query($con, $query);
?>
    <?php while ($row = mysqli_fetch_assoc($chatThreads)):  ?>
    <div class="row"> <!-- // Row starting -->
        <div class="user-name  s2 grey lighten-4 red-text text-darken-4 z-depth-1">
            <h6><?php echo $row['username']; ?></h6>
        </div>
        <div class="user-shout round s8 grey lighten-4 orange-text text-darken-3 z-depth-1">
            <h6><?php echo $row['message']; ?></h6>
        </div>
        <div class="time round s2 offset-s10 grey lighten-4 blue-text text-darken-4 z-depth-1" style="float:right;">
            <?php $customTime = date('d M Y - D, h:i A', strtotime($row['time'])); ?>
            <h6><?php echo $customTime; ?></h6>
        </div>
    </div> <!-- Row Ending -->
    <?php endwhile; ?>
