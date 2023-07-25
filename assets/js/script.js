var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeDisplayEl = $('#currentDay');
var saveButton = $('.saveBtn');

//Button used to save data to local storage
saveButton.on('click', function() {
  console.log(this); // signals button has been activated.
  var time = $(this).parent().attr('id');
  var text = $(this).siblings('.description').val();
  localStorage.setItem(time, text);
}); 

//Iterates through and sets the local storage data to given id/class #.
//(Enables data persistance upon refresh of page.)
for (i = 9; i < 18; i++) {
  $('#' + [i] + ' .description').val(localStorage.getItem([i]));
}

//Sets the correct attributes according to the hour.
function currentHour() {
  var now = dayjs().hour();
  //loop added to reduce amount of code. Iterates through each hour and compares to current time.
  for (var i = 0; i < hours.length; i++) {
    var timeBlock = $('#' + hours[i]);

    if (now > hours[i]) {      
      timeBlock.addClass('past');
    } else if (now < hours[i]) {
        timeBlock.addClass('future');
    } else if (now === hours[i]) {
        timeBlock.addClass('present');
    }    
  }
}

//Displays the current date to the top of the page.
function displayDate() {
  var rightNow = dayjs().format('MMMM DD, YYYY');
  timeDisplayEl.text(rightNow);
}

displayDate();
currentHour();

