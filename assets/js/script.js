// var hour9 = $('#9');
// var hour10 = $('#10');
// var hour11 = $('#11');
// var hour12 = $('#12');
// var hour13 = $('#13');
// var hour14 = $('#14');
// var hour15 = $('#15');
// var hour16 = $('#16');
// var hour17 = $('#17');
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeDisplayEl = $('#currentDay');
var saveButton = $('.saveBtn');

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

saveButton.on('click', function() {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

function currentHour() {
  var now = dayjs().hour();
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

function displayDate() {
  var rightNow = dayjs().format('MMMM DD, YYYY');
  timeDisplayEl.text(rightNow);
}

displayDate();
currentHour();


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
