'use strict';
console.log('--------------------------\nWelcome geek, why you are viewing the console. Fork it from github. :)\n--------------------------\nAlso try to make the "Edit Button" work.\nThanks\n===================');
console.log('\n-|--|--|--|--|--|--|--|--|--|--|--|\napp.js loaded successfully');
// Lets use jQuery for this

//Adding all the Event listeners
//==============================

// things to do when the 'get started button is clicked'
$( "#start-btn" ).click(function() {
  $( ".welcome-container" ).fadeOut( "slow", function() {
    $('.main-container').hide();
    $('.main-container-2').hide();
    $('body').fadeIn('slow', function() {
    	$(this).css('background-color', '#fffef2');
    	$('.view-tasks').show();
    	$('.main-container-3').css({
    		'background-color' : '#fffef2',
    		'max-width' : '90%',
    		'margin' : '0 auto'
    		});
    	$('.my-crum').css('background-color', '#fffef2');
    	$('#space').html('<br><br>');
    	showMyTasks();
    });
  });
});

// things to do when the home button is clicked
$('#home-btn').click(function(){
	$('.view-tasks').fadeOut('slow', function(){
    	$('.main-container').show();
		$('.welcome-container').show();
    	$('.main-container-2').show();
    	$('.main-container-3').css({
    		'background-color' : '#f9fdff',
    		'max-width' : '100%'
    		});
    	$('.my-crum').css('background-color', '#f9fdff');
    	$('#space').html('');
    	$('body').css('background-color', '#f9fdff');
	});
});

// things to do when the add-task button is clicked
$('#add-btn').click(function() {
	$('.view-tasks').hide();
	$('.main-container-3').hide();
	$('.main-container-5').fadeIn('slow', function() {
		$('body').css('background-color', '#fff');
	});
});

// add task on click of submit button
$('#submit-task-btn').click(function(e){
	e.preventDefault();
	addMyTask();
});

// hide the form on clicking cancel
$('#cancel-btn').click(function() {
	clearForm();
	hideAddTaskForm();
});

// adding event listener to the 'delete' button
$('#task-holder').click(function(e){
    console.log('task-holder clicked');
    deleteTask(e);
});

// setting the minimum date to today's date
$('#task-date').attr('min', getTodaysDate());


// create an empty array to store teh task object
//------------------------------------------------
var quickTodo = [];

// all the required functions are declared here
// -----------------------------------------------

// creating the function class for the task object to be stored in the quicktodo array
function taskObject (taskName, taskDate, taskTime, taskPriority) {
	this.tName = taskName;
	this.tDate  = taskDate;
	this.tTime = taskTime;
	this.tPriority = taskPriority;

}

// this function will be used to addd the task in the localStorage
// it will first take the data from the user
// then will update the localStorage and the task-view as well
function addMyTask() {
	// taking values  from the form
	var taskName 		= $('#task-name').val();
	var taskDate 		= $('#task-date').val();
	var time 	 		= $('#task-time').val();
	// process time in 12 hrs AM-PM format
	var taskTime 		= processTime(time); 
	var taskPriority 	= $('#task-priority').val();

	// checking for empty values
	var notNull = taskName != '' && taskDate != '' && taskTime != '' && taskPriority != '';

	if (notNull) {
		console.log('values are : \n' + taskName + '\n' + taskDate + '\n' + taskTime + '\n' + taskPriority );
		// creating the task object that we'll store 
		var taskObj = new taskObject(taskName, taskDate, taskTime, taskPriority);
		//push the object into the empty quickTodo array
		quickTodo.push(taskObj);
		// now store the array in the local storage 
		localStorage['quickToDoKey'] = JSON.stringify(quickTodo);
		console.log('Task added in localStorage');
		// now hide the form 
		clearForm();
		hideAddTaskForm();
		$('.no-task-alert').hide();
		$('#task-heading').show();
		showMyTasks();
	}
	else {
		alert('please fill the form');
	}
	return;
}

// this function will update the task-view whenever a task is added/removed from the list
function showMyTasks() {
	// check if the key exists in the local storage or not
	if (localStorage['quickToDoKey'] === undefined) {
		$('#task-heading').hide();
		$('.no-task-alert').show();

		//create the key and store an empty array in the localStorage
		localStorage['quickToDoKey'] = "[]"; 
	}
	else {
		if (localStorage['quickToDoKey'] === '[]') {
			$('#task-heading').hide();
            $('.no-task-alert').show();
		}
		// loop through the array 
		quickTodo = JSON.parse(localStorage['quickToDoKey']);

		var taskHolder = $('#task-holder');	
		var elementsCode = '';
		// check for the tasks in the array 
        
		for (var task in quickTodo) {
                var createRow = '<div class="task-row" class="lead">'
          			+	'<p class="my-border-2 col-sm-1">' + (Number(task) + 1 ) +'</p>'
          			+	'<p class="my-border-2 col-sm-3">' +  quickTodo[task].tName +'</p>'
          			+	'<p class="my-border-2 col-sm-2">' + quickTodo[task].tPriority  +'</p>'
          			+	'<p class="my-border-2 col-sm-2">' + quickTodo[task].tDate + '</p>'
          			+	'<p class="my-border-2 col-sm-2">' + quickTodo[task].tTime +'</p>'
          			+	'<p class="my-border-2 col-sm-2">'
            		+	'<button class="btn btn-secondary btn-sm" disabled title="Edit Task" class="" data-id="'+ task +'"><i class="fa fa-pencil fa-lg edit-task-btn" aria-hidden="true" style="color: #f39c12;"></i></button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
            		+	'<button class="btn btn-secondary btn-sm" title="Delete Task" class="" data-id="'+ task +'"><i class="fa fa-trash fa-lg del-task-btn" aria-hidden="true" style="color:#d35400;"></i></button>'
                	+ '</div>';
            //console.log(createRow + '\n\n');
            elementsCode += createRow;
		}
        taskHolder.html(elementsCode);
	}
}

// this function will be used to hide the add-task-form
function hideAddTaskForm() {
	$('.view-tasks').show();
	$('.main-container-3').show();
	$('.main-container-5').fadeOut('slow', function(){
		$('body').css('background-color', '#fffef2');
	});
	return;
}

// this function will delete the specified task using the task ID stored in the "data-id" attribute
function deleteTask(e) {
    if (e.target.classList.contains('del-task-btn')){
        var taskID = e.target.getAttribute('data-id');
        console.log(taskID);
        quickTodo.splice(taskID, 1);
        localStorage['quickToDoKey'] = JSON.stringify(quickTodo);
        showMyTasks();
        console.log('Task with ID= '+ taskID + 'Deleted Successfully');
    }
}

//this is a helper function to update the correct time in AM/PM form in the task object
function processTime (time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

// helper function again, to get today's date and set it in the min attribute of date input field
// copied from stackoverflow for quick use
function getTodaysDate () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    if(dd<10){
        dd='0'+dd
    } 
    
    if(mm<10){
        mm='0'+mm
    }
    
    today = yyyy+'-'+mm+'-'+dd;
    return today;
}

// helper function yet again to clear the form
function clearForm() {
	$('#task-name').val('');
	$('#task-date').val('');
	$('#task-time').val('');
	return;
}