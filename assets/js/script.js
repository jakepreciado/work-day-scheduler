var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var timeDisplayEl = $('#currentDay');
var saveButton = $('.saveBtn');

saveButton.on('click', function() {
  console.log(this);
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  localStorage.setItem(time, text);
}); 

for (i = 9; i < 18; i++) {
  $('#' + [i] + ' .description').val(localStorage.getItem([i]));
}

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

